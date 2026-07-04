# Contributing to Spirit Protocol Docs

This repo is the source of truth for [docs.spiritprotocol.io](https://docs.spiritprotocol.io). It deploys via Mintlify: **every merge to `main` goes live automatically** within a couple of minutes. No deploy step, no build config — the Mintlify GitHub App watches this repo.

## Quick start

```bash
git clone https://github.com/spirit-protocol/docs.git
cd docs
npm i -g mint          # Mintlify CLI
mint dev               # local preview at http://localhost:3000
```

Edit any `.mdx` file, save, and the preview hot-reloads. That's the whole loop.

## Repo layout

| Path | What lives there |
|---|---|
| `docs.json` | Site config + navigation. Add new pages here or they won't appear. |
| `index.mdx` | Landing page |
| `concepts/` | Core concepts (sovereignty, daily practice, graduation) |
| `studio/` | Spirit Studio guides — create, train, deploy (UI-first walkthroughs) |
| `developers/` | Programmatic surface — quickstart, SDKs (`spirit-protocol-sdk`, `airc-sdk`, `agent-kit`), contracts, discovery endpoints |
| `token/` | $SPIRIT token pages |
| `images/`, `logo/` | Static assets |

## Workflow

1. Branch from `main` (`feat/studio-api-docs`, `fix/quickstart-typo`, …)
2. Edit, preview with `mint dev`
3. Run `mint broken-links` before pushing
4. Open a PR — Mintlify validates the build on the PR
5. Merge → live on docs.spiritprotocol.io automatically

Small fixes (typos, broken links) can go straight to a PR without discussion. New sections or navigation changes: give the other maintainers a heads-up first.

## Writing rules

- **Frontmatter required** on every page: `title`, `description` (used for SEO), optional `sidebarTitle`.
- Mintlify components are available: `<Note>`, `<Steps>`, `<CardGroup>`, `<CodeGroup>`, `<Accordion>`. Match the style of neighboring pages.
- **Voice**: plain language, developer-first in `developers/`, narrative allowed in `concepts/` and `studio/`.
- **Public-surface rules** (these are hard):
  - Launch timing is "late July 2026" — never a specific date.
  - No token price, valuation, FDV, or allocation numbers.
  - SOLIENNE is the only agent named publicly.
  - "fifty moons," never "fifty months."
  - "frontier intelligence" — don't name specific model versions.

## Adding a page

1. Create the `.mdx` file in the right directory.
2. Add its path (without extension) to the matching group in `docs.json`.
3. Check it renders in `mint dev` and appears in the sidebar.

## Programmatic / API docs

Mintlify supports OpenAPI natively: drop an `openapi.json`/`openapi.yaml` in the repo, reference it from `docs.json`, and it generates an interactive API reference with a try-it playground. If you're documenting the Studio API surface, this is the preferred path — one spec file, generated pages, no hand-written endpoint docs to drift.
