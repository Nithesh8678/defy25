import { ethers } from "ethers";

export const getContract = (address, abi, signer) => {
  return new ethers.Contract(address, abi, signer);
};

export const getProvider = () => {
  if (!window.ethereum) {
    throw new Error("Please install MetaMask!");
  }
  return new ethers.providers.Web3Provider(window.ethereum);
};

export const getSigner = async () => {
  const provider = getProvider();
  await provider.send("eth_requestAccounts", []);
  return provider.getSigner();
};
