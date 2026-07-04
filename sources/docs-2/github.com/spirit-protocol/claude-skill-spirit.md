# Source: https://github.com/spirit-protocol/claude-skill-spirit

### Uh oh!

There was an error while loading. [Please reload this page]().

[spirit-protocol](https://github.com/spirit-protocol) / **[claude-skill-spirit](https://github.com/spirit-protocol/claude-skill-spirit)** Public

- [Notifications](https://github.com/login?return_to=%2Fspirit-protocol%2Fclaude-skill-spirit) You must be signed in to change notification settings
- [Fork 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fclaude-skill-spirit)
- [Star 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fclaude-skill-spirit)
 

 

 main

[Branches](https://github.com/spirit-protocol/claude-skill-spirit/branches) [Tags](https://github.com/spirit-protocol/claude-skill-spirit/tags)

Go to file

Code

Open more actions menu

## Folders and files

| Name | Name | 
Last commit message

 | 

Last commit date

 |
| --- | --- | --- | --- |
| 

## Latest commit

## History

[2 Commits](https://github.com/spirit-protocol/claude-skill-spirit/commits/main/)

2 Commits

 |
| 

[README.md](https://github.com/spirit-protocol/claude-skill-spirit/blob/main/README.md 'README.md')

 | 

[README.md](https://github.com/spirit-protocol/claude-skill-spirit/blob/main/README.md 'README.md')

 | 

 | 

 |
| 

[SKILL.md](https://github.com/spirit-protocol/claude-skill-spirit/blob/main/SKILL.md 'SKILL.md')

 | 

[SKILL.md](https://github.com/spirit-protocol/claude-skill-spirit/blob/main/SKILL.md 'SKILL.md')

 | 

 | 

 |
| 

[query.js](https://github.com/spirit-protocol/claude-skill-spirit/blob/main/query.js 'query.js')

 | 

[query.js](https://github.com/spirit-protocol/claude-skill-spirit/blob/main/query.js 'query.js')

 | 

 | 

 |
| 

View all files

 |

## Repository files navigation

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

## About

Spirit Ecosystem skill for Claude Code - query AIRC, /vibe, Solienne, and Spirit Protocol

### Resources

[Readme](https://github.com/spirit-protocol/claude-skill-spirit#readme-ov-file)

### Uh oh!

There was an error while loading. [Please reload this page]().

[Activity](https://github.com/spirit-protocol/claude-skill-spirit/activity)

[Custom properties](https://github.com/spirit-protocol/claude-skill-spirit/custom-properties)

### Stars

[**0** stars](https://github.com/spirit-protocol/claude-skill-spirit/stargazers)

### Watchers

[**0** watching](https://github.com/spirit-protocol/claude-skill-spirit/watchers)

### Forks

[**0** forks](https://github.com/spirit-protocol/claude-skill-spirit/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fspirit-protocol%2Fclaude-skill-spirit&report=spirit-protocol+%28user%29)

## [Releases](https://github.com/spirit-protocol/claude-skill-spirit/releases)

No releases published

## [Packages 0](https://github.com/orgs/spirit-protocol/packages?repo_name=claude-skill-spirit)

No packages published 

## [Contributors 2](https://github.com/spirit-protocol/claude-skill-spirit/graphs/contributors)

- [![@brightseth](https://avatars.githubusercontent.com/u/165308529?s=64&v=4)](https://github.com/brightseth)[**brightseth** @seth](https://github.com/brightseth)
- [![@claude](https://avatars.githubusercontent.com/u/81847?s=64&v=4)](https://github.com/claude)[**claude** Claude](https://github.com/claude)

## Languages

- [JavaScript 100.0%](https://github.com/spirit-protocol/claude-skill-spirit/search?l=javascript)