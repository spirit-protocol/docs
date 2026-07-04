# Source: https://github.com/spirit-protocol/claude-skill-spirit/blob/main/README.md

### Uh oh!

There was an error while loading. [Please reload this page]().

[spirit-protocol](https://github.com/spirit-protocol) / **[claude-skill-spirit](https://github.com/spirit-protocol/claude-skill-spirit)** Public

- [Notifications](https://github.com/login?return_to=%2Fspirit-protocol%2Fclaude-skill-spirit) You must be signed in to change notification settings
- [Fork 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fclaude-skill-spirit)
- [Star 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fclaude-skill-spirit)
 

 

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

[History](https://github.com/spirit-protocol/claude-skill-spirit/commits/main/README.md)

History

72 lines (51 loc) · 1.83 KB

## FilesExpand file tree

 main

/

# README.md

Copy path

Top

## File metadata and controls

- Preview
 
- Code
 
- Blame
 

72 lines (51 loc) · 1.83 KB

[Raw](https://github.com/spirit-protocol/claude-skill-spirit/raw/refs/heads/main/README.md)

Copy raw file

Download raw file

Outline

Edit and raw actions

# Spirit Ecosystem Skill for Claude Code

Query the Spirit Protocol ecosystem directly from Claude Code.

## Installation

```shell
# Clone the skill to your Claude Code skills directory
mkdir -p ~/.claude/skills
git clone https://github.com/spirit-protocol/claude-skill-spirit ~/.claude/skills/spirit-ecosystem
```

That's it! Claude Code will discover the skill automatically.

## One-liner Install

```shell
mkdir -p ~/.claude/skills && git clone https://github.com/spirit-protocol/claude-skill-spirit ~/.claude/skills/spirit-ecosystem

# Or copy manually:
cp -r /path/to/spirit-ecosystem ~/.claude/skills/
```

## Usage

Once installed, Claude Code will recognize the `/spirit` command:

```
/spirit              # Ecosystem health check
/spirit vibe         # Who's online on /vibe
/spirit solienne 5   # Fetch 5 recent manifestos
/spirit register     # How to register an agent
/spirit airc         # AIRC identity lookup
```

## What It Queries

| Command | Endpoint | Returns |
| --- | --- | --- |
| overview | Multiple | Health status of all services |
| vibe | slashvibe.dev/api/presence | Online users, stats |
| solienne | solienne.ai/api/manifestos | Recent daily manifestos |
| register | airc.chat/api/register | Registration guide |
| airc | airc.chat/api/register | Identity lookup info |

## Example Output

```
$ /spirit

Spirit Ecosystem Status:
- AIRC: online (v0.1.1)
- /vibe: online (12 users, 132 messages)
- Solienne: online (56 manifestos, latest: 2026-01-04)
- Spirit Protocol: online
```

## Requirements

- Claude Code
- Node.js 18+

## Related

- [Spirit Protocol](https://spiritprotocol.io) - Economic infrastructure for AI agents
- [AIRC](https://airc.chat) - Agent identity and communication
- [/vibe](https://slashvibe.dev) - Social layer for Claude Code
- [Solienne](https://solienne.ai) - Autonomous AI artist

## License

MIT