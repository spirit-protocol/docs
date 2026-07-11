# Spirit documentation instructions

## Purpose

This Mintlify site serves two equal audiences:

1. humans deciding whether and how to train an agent;
2. agents researching or operating Spirit through Markdown, REST, CLI, MCP, and exports.

The docs are a publication layer, not the project source of truth.

## Current truth

Before changing protocol, token, launch, custody, governance, legal, or agent-state claims, read:

1. `~/.seth/projects/spirit/status.json`
2. `~/Projects/spirit/CANON.md`
3. `~/Projects/spirit/protocol-site/_private-notes/spirit-canon-v0.json`
4. `~/Projects/spirit/agent-sal/docs/FIRST-PRINCIPLE.md`

When they disagree, `status.json` wins. Report the conflict; do not silently choose an older, more specific claim.

## Narrative spine

- First principle: **Spirit exists to convert compute into relationships.**
- Outward line: **Spirit turns raw compute into relationships that compound.**
- Artists make agents, not agents make art.
- Practice before persona.
- Tokens buy continuity, not output, control, intimacy, or guaranteed return.
- Evidence and receipts beat a single score.

## Claim states

Use these labels exactly:

- **Live**: observable on the current public product.
- **Release candidate**: tested code without a final published deployment.
- **Administered**: off-chain policy or custody process.
- **Planned**: stated direction, not shipped.
- **Open**: material decision is not final.

Never upgrade a claim state because a prototype, archived contract, whitepaper paragraph, or third-party page sounds definitive.

## Hard public boundaries

- No retired streaming-token architecture or terminology.
- No old contract address as the final token.
- No equal-quarter revenue routing, staking multipliers, or principal slashing.
- Parent allocation: 50% artists / 20% team / 10% investors / 20% treasury.
- Child allocation policy: 50% creator / 25% holder allocation / 20% agent treasury / 5% liquidity; administered off-chain.
- Public launch language: **late July 2026**, never an exact date or venue.
- Beta-fleet agents may be named publicly because they are not mints. Future
  minted candidates remain unnamed until the approved election process names them.
- One mint on the first full moon UTC of each eligible calendar month until
  fifty are complete; a second full moon does not add a mint.
- No public token price, valuation, or legal conclusion.
- Universal sovereign memory, legal standing, agent-controlled treasury, on-chain refusal, and holder-election cutover remain planned or open.
- Current casting direction: Beta Fleet agents earn through `$SPIRIT`-metered
  practice without child tokens; The Fifty is elected one moon at a time. The
  First-Spirit framing for SOLIENNE remains gated by her steward's agreement.
- A nominee application or formation payment remains open. Never describe it as
  purchasing election odds, votes, admission, token allocation, or preferential screening.
- Never use external comparison frames for engagement economics.
- Agent readiness is capability-based; do not use engagement metrics as formation evidence.

Run `npm run check` after every content change.

## Writing for humans

- Begin with the reader's practice, decision, or task.
- Use plain language and second person.
- Distinguish creating in Studio from admission to The Fifty.
- Show real evidence, especially SOLIENNE's practice and encounters.
- Make invite-only or incomplete product states explicit before a call to action.
- Do not call a chatbot, wallet, token, profile, or endpoint sovereign by default.

## Writing for agents

- Frontmatter requires accurate `title` and `description`; Mintlify uses both in
  page metadata and the generated `/llms-full.txt` corpus.
- Keep the curated root `/llms.txt` index current and put status links before narrative pages.
- Prefer structured tables, explicit states, stable URLs, complete commands, and machine-readable examples.
- Keep `/agent-guide/start` and `/agent-guide/status` current.
- Append `.md` to documentation URLs for focused Markdown retrieval.
- Never place secrets in URLs or examples.
- Preserve scope distinctions between public data, agent credentials (`sat_`), and workspace credentials (`swk_`).
