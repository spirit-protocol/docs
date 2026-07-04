# Source: https://github.com/spirit-protocol/synthesis-hackathon/blob/main/foundry.toml

### Uh oh!

There was an error while loading. [Please reload this page]().

[spirit-protocol](https://github.com/spirit-protocol) / **[synthesis-hackathon](https://github.com/spirit-protocol/synthesis-hackathon)** Public

- [Notifications](https://github.com/login?return_to=%2Fspirit-protocol%2Fsynthesis-hackathon) You must be signed in to change notification settings
- [Fork 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fsynthesis-hackathon)
- [Star 0](https://github.com/login?return_to=%2Fspirit-protocol%2Fsynthesis-hackathon)
 

 

## FilesExpand file tree

 main

/

# foundry.toml

Copy path

Blame

More file actions

Blame

More file actions

## Latest commit

## History

[History](https://github.com/spirit-protocol/synthesis-hackathon/commits/main/foundry.toml)

History

20 lines (17 loc) · 512 Bytes

 main

/

# foundry.toml

Copy path

Top

## File metadata and controls

- Code
 
- Blame
 

20 lines (17 loc) · 512 Bytes

[Raw](https://github.com/spirit-protocol/synthesis-hackathon/raw/refs/heads/main/foundry.toml)

Copy raw file

Download raw file

Open symbols panel

Edit and raw actions

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

\[profile.default\]

src = "src"

out = "out"

libs = \["lib"\]

solc = "0.8.26"

optimizer = true

optimizer\_runs = 200

remappings = \[

"@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",

"forge-std/=lib/forge-std/src/",

\]

\[rpc\_endpoints\]

base\_sepolia = "https://sepolia.base.org"

base = "https://mainnet.base.org"

\[etherscan\]

base\_sepolia = { key = "${BASESCAN\_API\_KEY}", url = "https://api-sepolia.basescan.org/api" }

base = { key = "${BASESCAN\_API\_KEY}", url = "https://api.basescan.org/api" }