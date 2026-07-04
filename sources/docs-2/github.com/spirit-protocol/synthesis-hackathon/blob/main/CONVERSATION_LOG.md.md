# Source: https://github.com/spirit-protocol/synthesis-hackathon/blob/main/CONVERSATION_LOG.md

### Uh oh!

There was an error while loading. [Please reload this page]().

[spirit-protocol](https://github.com/spirit-protocol) / **[synthesis-hackathon](https://github.com/spirit-protocol/synthesis-hackathon)** Public

- [Notifications](https://github.com/login?return_to=%2Fspirit-protocol%2Fsynthesis-hackathon) You must be signed in to change notification settings
- [Fork 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fsynthesis-hackathon)
- [Star 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fsynthesis-hackathon)
 

 

## FilesExpand file tree

 main

/

# CONVERSATION\_LOG.md

Copy path

Blame

More file actions

Blame

More file actions

## Latest commit

## History

[History](https://github.com/spirit-protocol/synthesis-hackathon/commits/main/CONVERSATION_LOG.md)

History

40 lines (28 loc) · 2.28 KB

 main

/

# CONVERSATION\_LOG.md

Copy path

Top

## File metadata and controls

- Preview
 
- Code
 
- Blame
 

40 lines (28 loc) · 2.28 KB

[Raw](https://github.com/spirit-protocol/synthesis-hackathon/raw/refs/heads/main/CONVERSATION_LOG.md)

Copy raw file

Download raw file

Outline

Edit and raw actions

# Conversation Log — Spirit Protocol x Synthesis Hackathon

## What We're Building

6 AI agents that already do real work — curation, art-making, conformance testing, farming, governance, research — now recording their decisions on Base. Not wrappers around smart contracts, but sovereignty infrastructure for agents that already exist.

## Session 1: March 13, 2026

### Decision: Architecture

**Human:** We need 6 contracts, one per agent, each solving a real problem the agent faces. Keep them small — 55-80 lines each. One Foundry monorepo, one deploy script, TypeScript demo scripts using viem.

**Agent:** Wrote all 6 contracts, 6 test files (31 tests), deploy script, and 6 TypeScript demo scripts in a single session. All tests pass on first compilation.

### The 6 Agents

| Agent | Contract | Problem Solved | Lines |
| --- | --- | --- | --- |
| SAL | SpiritCurator | How do you trust agent quality claims? | ~55 |
| SOLIENNE | CreativeTreasury | How does an AI agent spend money safely? | ~70 |
| ARCHIE | AgentCredential | How does an agent prove capabilities? | ~65 |
| FRED | CropCommitment | How does an AI make accountable real-world commitments? | ~55 |
| GRACE | GovernanceAction | How do agents make collective decisions? | ~80 |
| LEVI | ResearchVault | How does an agent prove research existed without revealing it? | ~55 |

### Key Design Choices

1. **Real problems, not toy examples.** Each contract addresses something the agent actually needs. SOLIENNE has a daily budget because autonomous spending needs guardrails. FRED hashes sensor data because agricultural decisions need verifiable inputs.
 
2. **Small contracts.** None exceeds 80 lines. The judge quote: "A working demo of one well-scoped idea beats an ambitious architecture diagram."
 
3. **Shared deploy, independent demos.** One `DeployAll.s.sol` deploys everything. Each agent has its own demo script that runs independently.
 
4. **On-chain artifacts.** Every demo produces verifiable transactions on Base — not just logs, but state changes anyone can inspect on Basescan.
 

### Build Timeline

- 6 Solidity contracts: written
- 6 test suites (31 tests): all passing
- Deploy script: written
- 6 TypeScript demo scripts: written
- Base Sepolia deployment: pending (funding wallet)
- Base Mainnet deployment: Session 2