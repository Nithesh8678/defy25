const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const LostAndFound = await hre.ethers.getContractFactory("LostAndFound");

  // Deploy the contract
  console.log("Deploying LostAndFound contract...");
  const lostAndFound = await LostAndFound.deploy();
  await lostAndFound.deployed();

  console.log("LostAndFound deployed to:", lostAndFound.address);

  // Wait for a few block confirmations
  console.log("Waiting for block confirmations...");
  await lostAndFound.deployTransaction.wait(5);

  console.log("Contract deployment completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
