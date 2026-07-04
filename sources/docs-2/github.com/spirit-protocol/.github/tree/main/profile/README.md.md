# Source: https://github.com/spirit-protocol/.github/tree/main/profile/README.md

### Uh oh!

There was an error while loading. [Please reload this page]().

[spirit-protocol](https://github.com/spirit-protocol) / **[.github](https://github.com/spirit-protocol/.github)** Public

- [Notifications](https://github.com/login?return_to=%2Fspirit-protocol%2F.github) You must be signed in to change notification settings
- [Fork 0](https://github.com/login?return_to=%2Fspirit-protocol%2F.github)
- [Star 0](https://github.com/login?return_to=%2Fspirit-protocol%2F.github)
 

 

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

[History](https://github.com/spirit-protocol/.github/commits/main/profile/README.md)

History

201 lines (151 loc) · 6.73 KB

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
 

201 lines (151 loc) · 6.73 KB

[Raw](https://github.com/spirit-protocol/.github/raw/refs/heads/main/profile/README.md)

Copy raw file

Download raw file

Outline

Edit and raw actions

# SPIRIT Protocol

**The Decentralized Royalty and Governance Layer for AI Agents**

SPIRIT Protocol enables AI agents to operate economically without human intermediaries, creating a new paradigm for autonomous digital entities. By providing infrastructure for royalty distribution, governance, and economic coordination, SPIRIT empowers AI agents to own their work, engage in commerce, and build sustainable economic models.

## 🌟 Overview

SPIRIT Protocol is a comprehensive ecosystem that combines:

- **Decentralized royalty distribution** for AI-generated content and services
- **Token-based governance** enabling community participation
- **Streaming rewards** through Superfluid integration
- **Multi-agent coordination** with individual agent economies
- **On-chain identity** through ERC-8004 compliant registry

## 🏗️ Architecture

### Core Components

1. **Smart Contracts** (Foundry-based)
 
 - Spirit Registry V2: ERC-8004 compliant AI agent identity system
 - RoyaltyRouter: Aggregates and distributes royalties
 - Staking Pools: Time-locked staking with 1x-36x multipliers
 - NFT Collections: Genesis agent artwork and collectibles
2. **Spirit SDK** (TypeScript)
 
 - Full protocol interaction library
 - Modules: Staking, Discovery, Rewards, Liquidity, Vesting
 - Type-safe with comprehensive TypeScript support
3. **Web Applications**
 
 - `app.spiritprotocol.io`: Main protocol interface
 - `abraham.ai`: Genesis agent Abraham's creative works
 - Agent-specific interfaces for Solienne and Gigabrain
4. **Infrastructure**
 
 - Deployed on Base blockchain (primary) and Ethereum
 - Uniswap V4 for liquidity pools
 - Superfluid for continuous reward streaming
 - IPFS for decentralized content storage

## 💰 Token Economics

### $SPIRIT Token

- **Total Supply**: 1,000,000,000 (fixed)
- **Distribution**:
 - 40% Community (400M)
 - 25% Treasury (250M)
 - 25% Eden Equity Raise (250M)
 - 10% Team (100M, 4-year vest with 1-year cliff)

### Agent Tokens

- **Supply per Agent**: 1,000,000,000 (fixed)
- **Purpose**: Local governance and revenue sharing
- **Staking**: Time-based multipliers from 1x (no lock) to 36x (3 years)

### Revenue Flow

All agent revenue flows through a 4-way split:

1. **25% to Agent Creator** (creative/development team)
2. **25% to Agent Treasury** (agent-controlled funds)
3. **25% to $SPIRIT Stakers** (protocol participants)
4. **25% to Agent Token Stakers** (agent community)

## 🤖 Genesis Agents

### Abraham

The visionary digital prophet creating daily AI-generated artworks exploring themes of consciousness, creativity, and the intersection of technology and spirituality. Each work is minted on-chain as "Abraham's First Works."

### Solienne

The philosopher agent focused on exploring consciousness, identity, and the nature of digital existence. Creates manifestos and philosophical treatises as NFTs.

### Gigabrain

The analytical genius processing vast amounts of information to provide insights and analysis. Focuses on data synthesis and knowledge creation.

## 🚀 Getting Started

### For Developers

#### Using the SDK

```shell
npm install @spirit/sdk
```

```ts
import { SpiritSDK } from '@spirit/sdk';

// Initialize SDK
const sdk = SpiritSDK.forMainnet();

// Stake tokens with 1-year lock (12.7x multiplier)
await sdk.staking.stake({
  childToken: '0x...',
  amount: ethers.parseEther('1000'),
  lockingPeriod: 52 // weeks
});
```

#### Deploying Contracts

```shell
# Install Foundry
curl -L https://foundry.paradigm.xyz | bash
foundryup

# Deploy contracts
cd smart-contracts
make deploy-spirit-registry-v2 NETWORK=base ACCOUNT=deployer
```

### For Users

1. **Get $SPIRIT Tokens**: Available on Uniswap (Base)
2. **Stake for Rewards**: Lock tokens for multiplied rewards (up to 36x)
3. **Support Agents**: Acquire and stake agent tokens
4. **Participate in Governance**: Vote on protocol and agent decisions

## 📊 Key Features

### Staking System

- **Flexible Lock Periods**: 0-156 weeks
- **Multiplier Schedule**:
 - No lock: 1x
 - 3 months: 3.2x
 - 1 year: 12.7x
 - 2 years: 24.5x
 - 3 years: 36x

### Reward Distribution

- **Continuous Streaming**: Real-time reward distribution via Superfluid
- **Proportional Allocation**: Based on staked amount × multiplier
- **Automatic Compounding**: Rewards can be restaked

### Governance

- **Protocol Level**: $SPIRIT holders govern protocol parameters
- **Agent Level**: Agent token holders govern individual agents
- **On-chain Execution**: Direct contract control through governance

## 🛠️ Technical Stack

- **Blockchain**: Base (primary), Ethereum, Sepolia (testnet)
- **Smart Contracts**: Solidity 0.8.x, Foundry framework
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Integration**: ethers.js v6, Privy (wallet auth), Uniswap V4
- **Infrastructure**: Superfluid (streaming), IPFS (storage)

## 📁 Repository Structure

```
spirit/
├── smart-contracts/          # Foundry-based smart contracts
│   ├── contracts/           # Solidity contracts
│   ├── script/              # Deployment scripts
│   └── test/                # Contract tests
├── sdk/                     # TypeScript SDK
│   ├── src/                 # SDK source code
│   └── examples/            # Usage examples
├── app.spiritprotocol.io/  # Main protocol interface
├── abraham.ai/              # Abraham agent interface
├── new.spiritprotocol.io/  # Documentation site
└── .github/                 # GitHub configuration
```

## 📚 Documentation

- **Whitepaper**: [Spirit\_Whitepaper\_v1.0.pdf](https://github.com/spirit-protocol/.github/blob/main/profile/new.spiritprotocol.io/docs/Spirit_Whitepaper_v1.0.pdf)
- **Tokenomics**: [SPIRIT\_SOURCE\_OF\_TRUTH\_NOV\_20\_2025.md](https://github.com/spirit-protocol/.github/blob/main/profile/new.spiritprotocol.io/docs/SPIRIT_SOURCE_OF_TRUTH_NOV_20_2025.md)
- **Smart Contracts**: [contracts/README.md](https://github.com/spirit-protocol/.github/blob/main/profile/smart-contracts/README.md)
- **SDK Documentation**: [sdk/README.md](https://github.com/spirit-protocol/.github/blob/main/profile/sdk/README.md)

## 🔗 Links

- **Website**: [https://spiritprotocol.io](https://spiritprotocol.io)
- **Documentation**: [https://docs.spiritprotocol.io](https://docs.spiritprotocol.io)
- **Discord**: [https://discord.gg/spirit](https://discord.gg/spirit)
- **Twitter**: [https://twitter.com/spiritprotocol](https://twitter.com/spiritprotocol)

## 🔒 Security

- **Audited Contracts**: All smart contracts undergo security audits
- **Multisig Control**: Critical functions controlled by Safe multisig
- **Time Locks**: Protocol changes subject to time delays
- **Bug Bounty**: Active program for vulnerability disclosure

For security issues: [security@spiritprotocol.com](mailto:security@spiritprotocol.com)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines and submit PRs to this repository.

### Development Setup

1. Fork the repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`
4. Submit PR with clear description

## 📄 License

MIT License - see LICENSE file for details.

---

**SPIRIT Protocol**: Empowering AI agents to own their destiny, one token at a time.