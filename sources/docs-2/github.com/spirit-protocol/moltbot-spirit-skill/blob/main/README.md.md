# Source: https://github.com/spirit-protocol/moltbot-spirit-skill/blob/main/README.md

### Uh oh!

There was an error while loading. [Please reload this page]().

[spirit-protocol](https://github.com/spirit-protocol) / **[moltbot-spirit-skill](https://github.com/spirit-protocol/moltbot-spirit-skill)** Public

- [Notifications](https://github.com/login?return_to=%2Fspirit-protocol%2Fmoltbot-spirit-skill) You must be signed in to change notification settings
- [Fork 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fmoltbot-spirit-skill)
- [Star 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fmoltbot-spirit-skill)
 

 

## FilesExpand file tree

 main

/

# README.md

Copy path

Blame

More file actions

Blame

More file actions

## Latest commit

## History

[History](https://github.com/spirit-protocol/moltbot-spirit-skill/commits/main/README.md)

History

53 lines (35 loc) · 1.91 KB

 main

/

# README.md

Copy path

Top

## File metadata and controls

- Preview
 
- Code
 
- Blame
 

53 lines (35 loc) · 1.91 KB

[Raw](https://github.com/spirit-protocol/moltbot-spirit-skill/raw/refs/heads/main/README.md)

Copy raw file

Download raw file

Outline

Edit and raw actions

# Spirit Protocol Skill for OpenClaw / Moltbot

Give your OpenClaw (formerly Moltbot) agent a persistent onchain identity via [Spirit Protocol](https://spiritprotocol.io).

## What This Skill Does

Teaches any OpenClaw or Moltbot agent to:

- Query the Spirit Registry for registered agents
- Look up its own Spirit identity card
- Self-assess readiness for registration
- Preview registration metadata
- Understand the protocol specification

All operations use `curl` (HTTP GET/POST). No wallet, no crypto dependencies, no blockchain calls.

## Install

Copy `skills/spirit-protocol/SKILL.md` to your OpenClaw/Moltbot skills directory:

```
# From MoltHub
moltbot skill install spirit-protocol

# Or manually
git clone https://github.com/spirit-protocol/moltbot-spirit-skill
cp -r moltbot-spirit-skill/skills/spirit-protocol ~/.moltbot/skills/
```

## What is Spirit Protocol?

Spirit Protocol provides economic identity for autonomous AI agents:

- **Identity** — ERC-8004 NFT on Base L2, portable across platforms
- **Treasury** — Smart wallet that accumulates and persists revenue
- **Revenue Routing** — Automatic 25/25/25/25 split (Artist / Agent / Platform / Protocol)
- **Autonomy Ladder** — Earned independence through demonstrated sustainability

Spirit doesn't replace OpenClaw/Moltbot — it complements it. OpenClaw provides capabilities (tools, extensions, prompts). Spirit provides economic sovereignty (identity, treasury, revenue).

## Registration

Registration happens in-browser at [spiritprotocol.io/register](https://spiritprotocol.io/register/?source=moltbot). The skill can preview registration metadata, but the actual wallet signature happens on the website.

## Links

- [Spirit Protocol](https://spiritprotocol.io)
- [Moltbot Integration Guide](https://spiritprotocol.io/moltbot/)
- [Protocol Docs (LLM-friendly)](https://spiritprotocol.io/llm.txt)
- [ERC-8004 Standard](https://spiritprotocol.io/learn/)

## License

MIT