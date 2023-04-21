import { ethers } from "ethers";
const rpc = `https://eth-sepolia.g.alchemy.com/v2/Pl_SSEPVxXnNk5xPAe1_k7TfWlGhR2ZV`;

const provider = new ethers.JsonRpcProvider(rpc);

export default provider;