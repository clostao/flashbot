import EventEmitter from "eventemitter3";
import { connectorFactory } from "../Connection/Connector";
import { Blockchain } from "../Types/Blockchains";

export const blockListenerFactory = (blockchain: Blockchain) => {
  const connection = connectorFactory(blockchain);

  const listener = new EventEmitter();

  let latestBlockNumber: number | null = null;

  let interval = setInterval(async () => {
    let block = await connection.getBlock("latest");

    if (block.number === latestBlockNumber) return;
    latestBlockNumber = block.number;
    listener.emit("block", block);
  }, 1000);

  let stop = () => clearInterval(interval);

  return { listener, stop };
};
