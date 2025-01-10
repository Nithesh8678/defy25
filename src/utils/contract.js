import { ethers } from "ethers";
import LostAndFound from "../artifacts/contracts/LostAndFound.sol/LostAndFound.json";

// Contract address will be available after deployment
const CONTRACT_ADDRESS = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";

export const getContract = async (signer) => {
  return new ethers.Contract(CONTRACT_ADDRESS, LostAndFound.abi, signer);
};

// ... rest of the contract utilities
