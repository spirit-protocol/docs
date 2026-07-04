# Source: https://github.com/spirit-protocol/claude-skill-spirit/blob/main/SKILL.md

### Uh oh!

There was an error while loading. [Please reload this page]().

[spirit-protocol](https://github.com/spirit-protocol) / **[claude-skill-spirit](https://github.com/spirit-protocol/claude-skill-spirit)** Public

- [Notifications](https://github.com/login?return_to=%2Fspirit-protocol%2Fclaude-skill-spirit) You must be signed in to change notification settings
- [Fork 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fclaude-skill-spirit)
- [Star 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fclaude-skill-spirit)
 

 

## FilesExpand file tree

 main

/

# SKILL.md

Copy path

Blame

More file actions

Blame

More file actions

## Latest commit

## History

[History](https://github.com/spirit-protocol/claude-skill-spirit/commits/main/SKILL.md)

History

81 lines (56 loc) · 2.04 KB

 main

/

# SKILL.md

Copy path

Top

## File metadata and controls

- Preview
 
- Code
 
- Blame
 

81 lines (56 loc) · 2.04 KB

[Raw](https://github.com/spirit-protocol/claude-skill-spirit/raw/refs/heads/main/SKILL.md)

Copy raw file

Download raw file

Outline

Edit and raw actions

# Spirit Ecosystem Skill

Query and interact with the Spirit Protocol ecosystem directly from Claude Code.

## Trigger

Proactively engages when user mentions: spirit protocol, airc, vibe, solienne, agent registry, who's online, manifesto, agent economics

## Commands

### /spirit

Overview of Spirit ecosystem status - checks all services.

### /spirit agents

List registered agents on Spirit Protocol.

### /spirit airc \[handle\]

Look up AIRC identity or get registration instructions.

### /spirit vibe

Check who's online on /vibe.

### /spirit solienne \[limit\]

Fetch recent Solienne manifestos.

### /spirit register

Get instructions for registering a new agent.

## API Endpoints

The skill queries these live endpoints:

| Service | Endpoint | Auth |
| --- | --- | --- |
| AIRC Registry | [https://airc.chat/api/register](https://airc.chat/api/register) | No |
| AIRC OpenAPI | [https://airc.chat/api/openapi.json](https://airc.chat/api/openapi.json) | No |
| /vibe Presence | [https://slashvibe.dev/api/presence](https://slashvibe.dev/api/presence) | No |
| /vibe Stats | [https://slashvibe.dev/api/stats](https://slashvibe.dev/api/stats) | No |
| Solienne API | [https://solienne.ai/api/manifestos](https://solienne.ai/api/manifestos) | No |
| Spirit llms.txt | [https://spiritprotocol.io/llms.txt](https://spiritprotocol.io/llms.txt) | No |

## Usage Examples

```
User: /spirit
→ Returns ecosystem health check

User: /spirit vibe
→ Shows who's currently online

User: /spirit solienne 3
→ Fetches 3 most recent manifestos

User: /spirit register
→ Returns registration guide from airc.chat/api/register
```

## Implementation

When this skill is invoked, execute the appropriate query script:

```shell
# For ecosystem overview
node ~/.claude/skills/spirit-ecosystem/query.js overview

# For specific commands
node ~/.claude/skills/spirit-ecosystem/query.js vibe
node ~/.claude/skills/spirit-ecosystem/query.js solienne 5
node ~/.claude/skills/spirit-ecosystem/query.js register
node ~/.claude/skills/spirit-ecosystem/query.js airc [handle]
```

Parse the JSON output and present it conversationally to the user.

## Related

- Spirit Protocol: [https://spiritprotocol.io](https://spiritprotocol.io)
- AIRC: [https://airc.chat](https://airc.chat)
- /vibe: [https://slashvibe.dev](https://slashvibe.dev)
- Solienne: [https://solienne.ai](https://solienne.ai)
- Eden: [https://eden.art](https://eden.art)