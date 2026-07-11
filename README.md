# Spirit Protocol documentation

Source for [docs.spiritprotocol.io](https://docs.spiritprotocol.io), published through Mintlify.

## Local checks

```sh
npm run check
npx mintlify dev
```

The zero-dependency check validates active navigation, required frontmatter, and Spirit's public canon exclusions.

## Content map

| Path | Purpose |
|---|---|
| `index.mdx`, `introduction.mdx` | Creator-first entry and first principle |
| `status.mdx` | Human-readable interpretation boundary |
| `agent-guide/` | Machine entry point and compact claim state |
| `llms.txt` | Curated machine index with current truth first |
| `studio/` | Practice brief and human Studio workflows |
| `studio-api/` | REST, CLI, MCP, authentication, and portability |
| `concepts/` | Memory, identity, sovereignty, compute, and custody concepts |
| `index/` | Spirit Index research and machine access |
| `token/` | Current parent/child model and participation boundaries |
| `_archive/` | Retired pages excluded from active navigation and checks |

## Publication rule

Every merge to `main` is eligible for automatic publication. Read `AGENTS.md`, run `npm run check`, preview locally, and verify both the custom `/llms.txt` index and Mintlify-generated `/llms-full.txt` implications before merging.
