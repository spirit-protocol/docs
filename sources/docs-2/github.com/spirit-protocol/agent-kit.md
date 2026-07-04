# Source: https://github.com/spirit-protocol/agent-kit

### Uh oh!

There was an error while loading. [Please reload this page]().

[spirit-protocol](https://github.com/spirit-protocol) / **[agent-kit](https://github.com/spirit-protocol/agent-kit)** Public

- [Notifications](https://github.com/login?return_to=%2Fspirit-protocol%2Fagent-kit) You must be signed in to change notification settings
- [Fork 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fagent-kit)
- [Star 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fagent-kit)
 

 

 main

[Branches](https://github.com/spirit-protocol/agent-kit/branches) [Tags](https://github.com/spirit-protocol/agent-kit/tags)

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

[3 Commits](https://github.com/spirit-protocol/agent-kit/commits/main/)

3 Commits

 |
| 

[.github/workflows](https://github.com/spirit-protocol/agent-kit/tree/main/.github/workflows 'This path skips through empty directories')

 | 

[.github/workflows](https://github.com/spirit-protocol/agent-kit/tree/main/.github/workflows 'This path skips through empty directories')

 | 

 | 

 |
| 

[docs](https://github.com/spirit-protocol/agent-kit/tree/main/docs 'docs')

 | 

[docs](https://github.com/spirit-protocol/agent-kit/tree/main/docs 'docs')

 | 

 | 

 |
| 

[src](https://github.com/spirit-protocol/agent-kit/tree/main/src 'src')

 | 

[src](https://github.com/spirit-protocol/agent-kit/tree/main/src 'src')

 | 

 | 

 |
| 

[test](https://github.com/spirit-protocol/agent-kit/tree/main/test 'test')

 | 

[test](https://github.com/spirit-protocol/agent-kit/tree/main/test 'test')

 | 

 | 

 |
| 

[.gitignore](https://github.com/spirit-protocol/agent-kit/blob/main/.gitignore '.gitignore')

 | 

[.gitignore](https://github.com/spirit-protocol/agent-kit/blob/main/.gitignore '.gitignore')

 | 

 | 

 |
| 

[README.md](https://github.com/spirit-protocol/agent-kit/blob/main/README.md 'README.md')

 | 

[README.md](https://github.com/spirit-protocol/agent-kit/blob/main/README.md 'README.md')

 | 

 | 

 |
| 

[package-lock.json](https://github.com/spirit-protocol/agent-kit/blob/main/package-lock.json 'package-lock.json')

 | 

[package-lock.json](https://github.com/spirit-protocol/agent-kit/blob/main/package-lock.json 'package-lock.json')

 | 

 | 

 |
| 

[package.json](https://github.com/spirit-protocol/agent-kit/blob/main/package.json 'package.json')

 | 

[package.json](https://github.com/spirit-protocol/agent-kit/blob/main/package.json 'package.json')

 | 

 | 

 |
| 

[tsconfig.json](https://github.com/spirit-protocol/agent-kit/blob/main/tsconfig.json 'tsconfig.json')

 | 

[tsconfig.json](https://github.com/spirit-protocol/agent-kit/blob/main/tsconfig.json 'tsconfig.json')

 | 

 | 

 |
| 

View all files

 |

## Repository files navigation

# @spirit/agent-kit

Shared primitives for Spirit Protocol agents. Extracted from the SOLIENNE encounter pipeline and generalized so any agent with a sensor stream, a perception loop, or a hidden-signal protocol can reuse them.

Zero runtime dependencies. ESM only.

---

## Three primitives

### `sentinels` — hidden-signal extractor

Agents emit tokens the user never sees (`[look: door]`, `[[image: red coat]]`) that route to tool calls. `extractSentinels` strips them from the user-facing stream in one pass while projecting payloads for consumers.

```ts
import { extractAllSentinels } from '@spirit/agent-kit/sentinels'

const { cleanText, looks, images } = extractAllSentinels(
  'walking [look: door] past [[image: doorway]] slowly',
)
// cleanText: "walking past slowly"
// looks: [{ hint: "door" }]
// images: [{ query: "doorway" }]
```

Define your own sentinel by conforming to `SentinelSpec`:

```ts
import { extractSentinels, type SentinelSpec } from '@spirit/agent-kit/sentinels'

const mySentinel: SentinelSpec<{ cmd: string }> = {
  name: 'cmd',
  probe: '[cmd:',
  pattern: /\[cmd:\s*([^\]]+)\]/g,
  project: (m) => ({ cmd: m[1].trim() }),
}

const { cleanText, payloads } = extractSentinels(text, [mySentinel])
```

### `validator` — payload shape + drift guard

Vision/sensor models drift into interpretation ("seems lonely", "probably looking at"). The validator catches drift at the ingest boundary so the consumer can downgrade a payload instead of injecting drifted content into a prompt loop.

```ts
import { validatePerceptionObservation } from '@spirit/agent-kit/validator'

const result = validatePerceptionObservation({
  summary: 'Visitor probably looking for something',
  posture: 'upright',
  gaze: 'scanning',
  affect: 'neutral',
  stillness: 'still',
  shift: 'new',
  trigger: 'push',
})
// result.valid === false
// result.failures: [{ rule: 'no_fabrication_markers', ... }]
```

Compose your own rule set:

```ts
import { validate, type ValidationRule } from '@spirit/agent-kit/validator'

const myRule: ValidationRule<MyShape> = {
  name: 'positive_score',
  check: (v) => (v.score >= 0 ? null : { rule: 'positive_score', reason: 'negative' }),
}

const result = validate(value, [myRule])
```

### `history` — session-keyed ring buffer

Bounded per-session storage with both insertion-order (`recent(n)`) and wall-clock-window (`arc(windowMs)`) reads. Generic over observation shape; caller provides the timestamp accessor.

```ts
import { PerceptionHistory } from '@spirit/agent-kit/history'

const history = new PerceptionHistory<MyObs>({
  slots: 20,
  getTimestamp: (obs) => obs.ts,
})

history.push(sessionId, obs)
const lastThree = history.recent(sessionId, 3)
const lastMinute = history.arc(sessionId, 60_000)
history.clear(sessionId) // on session end
```

---

## Install

Until published, reference by path from a sibling project:

```json
{
  "dependencies": {
    "@spirit/agent-kit": "file:../agent-kit"
  }
}
```

Consumers must be ESM (`"type": "module"`).

---

## Build + test

```shell
npm install
npm run build     # tsc -> dist/
npm test          # builds, then runs test/smoke.mjs against dist/
```

Smoke covers all three primitives end-to-end. 15 cases, zero deps, suitable for a pre-push hook.

---

## Import surface

Root barrel or submodule — both work, submodule is smaller:

```ts
// Submodule (smaller)
import { PerceptionHistory } from '@spirit/agent-kit/history'

// Barrel (one import site)
import { PerceptionHistory, extractAllSentinels, validate } from '@spirit/agent-kit'
```

---

## First consumer

SOLIENNE encounter pipeline (perception + runway-rpc). Reference rule set in `validator.ts` (`perceptionRules`) and reference sentinels in `sentinels.ts` (`lookSentinel`, `imageSentinel`) mirror that consumer's shapes. Other Spirit agents can reuse those directly or define their own.

## About

Shared primitives for Spirit Protocol agents — sentinel extraction, payload validation, session-keyed perception history.

### Resources

[Readme](https://github.com/spirit-protocol/agent-kit#readme-ov-file)

### Uh oh!

There was an error while loading. [Please reload this page]().

[Activity](https://github.com/spirit-protocol/agent-kit/activity)

[Custom properties](https://github.com/spirit-protocol/agent-kit/custom-properties)

### Stars

[**0** stars](https://github.com/spirit-protocol/agent-kit/stargazers)

### Watchers

[**0** watching](https://github.com/spirit-protocol/agent-kit/watchers)

### Forks

[**0** forks](https://github.com/spirit-protocol/agent-kit/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fspirit-protocol%2Fagent-kit&report=spirit-protocol+%28user%29)

## [Releases](https://github.com/spirit-protocol/agent-kit/releases)

No releases published

## [Packages 0](https://github.com/orgs/spirit-protocol/packages?repo_name=agent-kit)

No packages published 

## [Contributors 2](https://github.com/spirit-protocol/agent-kit/graphs/contributors)

- [![@brightseth](https://avatars.githubusercontent.com/u/165308529?s=64&v=4)](https://github.com/brightseth)[**brightseth** @seth](https://github.com/brightseth)
- [![@claude](https://avatars.githubusercontent.com/u/81847?s=64&v=4)](https://github.com/claude)[**claude** Claude](https://github.com/claude)

## Languages

- [TypeScript 66.2%](https://github.com/spirit-protocol/agent-kit/search?l=typescript)
- [JavaScript 33.8%](https://github.com/spirit-protocol/agent-kit/search?l=javascript)