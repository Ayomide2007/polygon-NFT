# Overview

---

This project entails developing and deploying an ERC721A-compliant NFT (Non-Fungible Token) contract called MetaTokenNFT on the Goerli Ethereum testnet. Subsequently, the NFT will be approved and deposited onto the Polygon Mumbai network using the fxPortal bridge.
The NFTs comprise a collection of various images.

## Getting Started

---
### Prerequisites

- Install [nvm](http://nvm.sh).
- Use **Node.js version 16** or higher.
```shell
nvm install 16
nvm use 16
```

## Project Initialization

---
```shell
git clone <this-repo-url>
```
```shell
cd <the-repo>
```
```shell
npm install
```

## Configuration

---
### Deploy contract
First compile the contract using `npx hardhat compile` then deploy the contract onto
Goerli Ethereum testnet using the following command:
```shell
npx hardhat run --network goerli scripts/nft/deploy.js
```

Then, if everything is set up right, you get a console response like this:
```
MetaToken NFT deployed to: <CONTRACT-ADDRESS>
```
### Batch mint NFTs
To batch mint NFTs to the deployed contract, update the contract address in the
`.env.example.` file and rename the file to `.env`. Also, subsequently update
the required variables in the `.env` file.  

Then run the `batchMint.js` script with this hardhat command:
```shell
npx hardhat run --network goerli scripts/nft/batchMint.js
```
The response log will look like:
```
Successfully minted: <number> MetaToken NFTs to <WALLET-ADDRESS>
```
### Approve transfer and deposit the NFTs to Polygon bridge
Pass in the Polygon Mumbai bridged address of your contract to `BRIDGE-ADDRESS` in
`.env`, then run the `approveTransfer.js` script with hardhat:
```shell
npx hardhat run --network goerli scripts/nft/approveTransfer.js
```
The response should look like this:
```
NFT approval confirmed
NFT deposited on Polygon Mumbai
```


## Author

Taiwo Ayomide
