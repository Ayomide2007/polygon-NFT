const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const WildNFTFactory = await hre.ethers.getContractFactory("WildNFT");

  const wildNft = await WildNFTFactory.attach(process.env.CONTRACT_ADDRESS);

  const mintTx = await wildNft.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await wildNft.balanceOf(process.env.WALLET_ADDRESS)) +
      " Wild NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await wildNft.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

