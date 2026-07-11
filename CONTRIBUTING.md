# Contributing to Spirit Protocol Docs

This repo is the publication source for [docs.spiritprotocol.io](https://docs.spiritprotocol.io). Project truth remains in the current Spirit canon described in `AGENTS.md`. It deploys via Mintlify: **every merge to `main` goes live automatically** within a couple of minutes.

## Quick start

```bash
git clone https://github.com/spirit-protocol/docs.git
cd docs
npm i -g mint          # Mintlify CLI
mint dev               # local preview at http://localhost:3000
npm run check          # canon, frontmatter, and navigation checks
```

Edit any `.mdx` file, save, and the preview hot-reloads. That's the whole loop.

## Repo layout

| Path | What lives there |
|---|---|
| `docs.json` | Site config + navigation. Add new pages here or they won't appear. |
| `llms.txt` | Curated machine index; current status must remain first. |
| `index.mdx` | Landing page |
| `agent-guide/` | Machine entry point and claim-state boundary |
| `concepts/` | Memory, identity, sovereignty, compute, custody |
| `studio/` | Practice brief and UI-first Studio guides |
| `studio-api/` | REST, CLI, MCP, authentication, external runtimes, portability |
| `index/` | Spirit Index research and machine access |
| `token/` | $SPIRIT token pages |
| `images/`, `logo/` | Static assets |

## Workflow

1. Branch from `main` (`feat/studio-api-docs`, `fix/quickstart-typo`, …)
2. Edit, preview with `mint dev`
3. Run `npm run check` and `mint broken-links` before pushing
4. Open a PR — Mintlify validates the build on the PR
5. Merge → live on docs.spiritprotocol.io automatically

Small fixes (typos, broken links) can go straight to a PR without discussion. New sections or navigation changes: give the other maintainers a heads-up first.

## Writing rules

- **Frontmatter required** on every page: `title`, `description` (used for SEO), optional `sidebarTitle`.
- Mintlify components are available: `<Note>`, `<Steps>`, `<CardGroup>`, `<CodeGroup>`, `<Accordion>`. Match the style of neighboring pages.
- **Voice**: plain language, developer-first in `developers/`, narrative allowed in `concepts/` and `studio/`.
- **Public-surface rules** (these are hard):
  - Launch timing is "late July 2026" — never a specific date.
  - No token price, valuation, or FDV. Allocation numbers must match current
    canon and state whether they are contract-enforced or administered.
  - Beta-fleet agents may be public; future minted candidates stay unnamed until the approved election process names them.
  - One mint on the first full moon of each eligible calendar month until fifty
    are complete; never "fifty months."
  - "frontier intelligence" — don't name specific model versions.
  - No retired streaming architecture or terminology.
  - No old contract addresses, equal-quarter routing, or staking multipliers.
  - Mark material claims `Live`, `Release candidate`, `Administered`, `Planned`, or `Open`.
  - Studio is invite-only; never send an uninvited reader to a dead-end "create now" flow.
  - Treat frontmatter descriptions as machine-facing claims because they populate `/llms.txt`.

## Adding a page

1. Create the `.mdx` file in the right directory.
2. Add its path (without extension) to the matching group in `docs.json`.
3. Check it renders in `mint dev` and appears in the sidebar.

## Programmatic / API docs

Mintlify supports OpenAPI natively: drop an `openapi.json`/`openapi.yaml` in the repo, reference it from `docs.json`, and it generates an interactive API reference with a try-it playground. If you're documenting the Studio API surface, this is the preferred path — one spec file, generated pages, no hand-written endpoint docs to drift.
