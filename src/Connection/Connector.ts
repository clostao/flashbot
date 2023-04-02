import { Blockchain, chainIdByBlockchain } from "../Types/Blockchains";
import { ethers, Signer } from "ethers";

export const connectorFactory = (blockchain: Blockchain, signer?: Signer) =>
  new ethers.JsonRpcProvider(rpcByBlockchain[blockchain]);

const rpcByBlockchain: Record<Blockchain, string> = {
  Polygon: "",
  Ethereum: "",
  FTM: "",
};
