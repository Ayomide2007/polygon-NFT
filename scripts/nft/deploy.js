
const hre = require("hardhat");

async function main() {

  const token = await hre.ethers.deployContract("WildNFT");

  console.log("WildNFT deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
