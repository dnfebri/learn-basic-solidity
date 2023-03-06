import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  const ContractLearn = await ethers.getContractFactory("LearnContrack");
  const contractLearn = await ContractLearn.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

  const pemilik = await contractLearn.getPemilik();


  console.log(pemilik);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
