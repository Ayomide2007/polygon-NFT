const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = ""; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = ""; 

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });