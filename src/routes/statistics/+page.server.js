import { getPriceHistory } from "$lib/api/binance";

/** @type {import('./$types').PageLoad} */
export async function load() {
  async function getBitcoinHistory() {
    return await getPriceHistory("1h", "BTCUSDT");
  }
  async function getEthereumHistory() {
    return await getPriceHistory("1h", "ETHUSDT");
  }

  return {
    bitcoinHistory: getBitcoinHistory(),
    ethereumHistory: getEthereumHistory(),
  };
}
