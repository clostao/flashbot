export enum Blockchain {
  Polygon = "Polygon",
  Ethereum = "Ethereum",
  FTM = "FTM",
}

export const chainIdByBlockchain = {
  [Blockchain.Ethereum]: 1,
  [Blockchain.Polygon]: 137,
  [Blockchain.FTM]: 250,
};
