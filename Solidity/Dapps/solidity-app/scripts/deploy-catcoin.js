const { ethers } = require("hardhat");

async function main() {
  const CatCoin = await ethers.getContractFactory("CatCoin");

  const catCoin = await CatCoin.deploy();
  await catCoin.deployed();
  console.log("Contract deployed to address:", catCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// npx hardhat compile
// npx hardhat --network sepolia run scripts/deploy-catcoin.js
