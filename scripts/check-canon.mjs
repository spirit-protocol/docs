import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const excluded = new Set([".git", "_archive", "node_modules", "sources"]);

const forbidden = [
  ["retired streaming architecture", /\b(?:superfluid|supertoken)\b/i],
  ["retired continuous-flow acronym", /\b(?:CFA|GDA)\b/],
  ["retired equal-quarter split", /25\s*\/\s*25\s*\/\s*25\s*\/\s*25/],
  ["retired revenue router", /\bRoyaltyRouter\b/i],
  ["retired staking multiplier", /\b36x\b/i],
  ["stale token address", /0xA1534d279F467063Fc40f71F2C672822A7E63880/i],
  ["stale public launch date", /\bJune\s+(?:15|17|18)(?:,?\s+2026)?\b/i],
  ["banned cadence wording", /\bfifty months\b/i],
  ["retired agent name", /\bABRAHAM\b/i],
  ["public valuation language", /(?:\bFDV\b|\$0\.04\b|\$40M\b)/i],
  ["external comparison frame", /\b(?:OnlyFans|Stripe Atlas)\b/i],
  ["unsafe nominee-payment frame", /pay\s+to\s+buy\s+(?:a\s+)?chance/i],
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (excluded.has(entry.name)) return [];
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith(".mdx") ? [full] : [];
  });
}

function relative(file) {
  return path.relative(root, file).split(path.sep).join("/");
}

const errors = [];
const files = walk(root);
const llmsFile = path.join(root, "llms.txt");

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const lines = source.split("\n");
  const rel = relative(file);

  if (!source.startsWith("---\n") || !/^title:\s*.+$/m.test(source) || !/^description:\s*.+$/m.test(source)) {
    errors.push(`${rel}: missing required title/description frontmatter`);
  }

  for (const [label, pattern] of forbidden) {
    lines.forEach((line, index) => {
      if (pattern.test(line)) errors.push(`${rel}:${index + 1}: ${label}: ${line.trim()}`);
      pattern.lastIndex = 0;
    });
  }
}

const config = JSON.parse(fs.readFileSync(path.join(root, "docs.json"), "utf8"));
const pages = config.navigation.tabs.flatMap((tab) => tab.groups.flatMap((group) => group.pages));
const pageSet = new Set(pages.filter((page) => typeof page === "string"));

for (const page of pages) {
  if (typeof page !== "string") continue;
  const target = path.join(root, `${page}.mdx`);
  if (!fs.existsSync(target)) errors.push(`docs.json: missing page ${page}.mdx`);
}

if (!fs.existsSync(path.join(root, "index.mdx"))) errors.push("missing root index.mdx");

if (!fs.existsSync(llmsFile)) {
  errors.push("missing custom llms.txt");
} else {
  const llms = fs.readFileSync(llmsFile, "utf8");
  if (!llms.startsWith("# Spirit Protocol\n")) errors.push("llms.txt: missing site title");
  const statusIndex = llms.indexOf("/status.md");
  const introductionIndex = llms.indexOf("/introduction.md");
  if (statusIndex === -1 || introductionIndex === -1 || statusIndex > introductionIndex) {
    errors.push("llms.txt: current status must precede narrative pages");
  }
  for (const [label, pattern] of forbidden) {
    llms.split("\n").forEach((line, index) => {
      if (pattern.test(line)) errors.push(`llms.txt:${index + 1}: ${label}: ${line.trim()}`);
      pattern.lastIndex = 0;
    });
  }
}

for (const file of files) {
  const rel = relative(file);
  const route = rel.replace(/\.mdx$/, "");
  if (route !== "index" && !pageSet.has(route)) {
    errors.push(`${rel}: active page is missing from docs.json navigation`);
  }

  const source = fs.readFileSync(file, "utf8");
  const links = [
    ...source.matchAll(/\]\((\/(?!\/)[^\s)#?]+)(?:[?#][^)]*)?\)/g),
    ...source.matchAll(/href=["'](\/(?!\/)[^"'#?]+)(?:[?#][^"']*)?["']/g),
  ].map((match) => match[1].replace(/\/$/, ""));

  for (const link of new Set(links)) {
    if (!link) continue;
    const target = link === "/" ? "index.mdx" : `${link.slice(1)}.mdx`;
    if (!fs.existsSync(path.join(root, target))) {
      errors.push(`${rel}: broken internal link ${link}`);
    }
  }
}

if (errors.length) {
  console.error(`Spirit docs checks failed (${errors.length}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Spirit docs checks passed: ${files.length} active MDX files, ${pages.length} navigation entries.`);
