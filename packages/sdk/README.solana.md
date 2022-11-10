<p align="center">
<br />
<a href="https://web3sdk.io"><img src="https://github.com/web3sdkio/web3/blob/main/packages/sdk/logo.svg?raw=true" width="200" alt=""/></a>
<br />
</p>
<h1 align="center">web3sdkio Solana SDK</h1>
<p align="center">
<a href="https://discord.gg/web3sdkio"><img alt="Join our Discord!" src="https://img.shields.io/discord/834227967404146718.svg?color=7289da&label=discord&logo=discord&style=flat"/></a>

</p>
<p align="center"><strong>web3sdkio's Solana SDK for Browser, Node and React Native</strong></p>
<br />

## Installation

Install the latest version of the SDK with either `npm` or `yarn`:

```shell
npm install @web3sdkio/sdk
```

```shell
yarn add @web3sdkio/sdk
```

## Quick Start

The first thing to do to get started with Solana using web3sdkio is to deploy a program. You can do this via the [Dashboard](https://web3sdk.io/dashboard), or via the SDK with the following snippet:

```jsx
import { Web3sdkioSDK } from "@web3sdkio/sdk/solana";

// First, we instantiate the SDK and connect to Solana devnet
const sdk = Web3sdkioSDK.fromNetwork("devnet");

// Next, we pass in a keypair to the SDK (you can generate this or use your own)
// You can also generate one, using Kepair.generate() from @solana/web3.js
const keypair = Keypair.fromSecretKey(...)
sdk.wallet.connect(keypair);

// Finally, we can deploy a new NFT Collection program
const address = await sdk.deployer.createNftCollection({
  name: "My Collection",
});
```

Once we have a deployed program, we can access it using the SDK to read and write data to the program:

```jsx
// Here, we pass in the address of our deployed program
const program = await sdk.getNFTCollection(address);

// And now we can read data off our program, like getting all the NFTs from our collection
const nfts = await program.getAll();

// Or we can write data/send transactions to our program, like minting a new NFT
const mintAddress = await program.mint({
  name: "New NFT",
});
const nft = await program.get(mintAddress);
```

## Learn More

You can learn more about web3sdkio and the Solana SDK with the following resources:

- [Solana Docs](https://portal.web3sdk.io/solana)
- [Web3sdkio Twitter](https://twitter.com/web3sdkio_)
- [Web3sdkio Discord](https://discord.com/invite/web3sdkio)
