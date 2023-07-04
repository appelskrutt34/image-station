import { getPriceHistory, getCurrentPrice } from "$lib/api/binance";

/** @type {import('./$types').PageLoad} */
export async function load() {
  async function getBitcoinHistory() {
    return await getPriceHistory("1h", "BTCUSDT");
  }
  async function getEthereumHistory() {
    return await getPriceHistory("1h", "ETHUSDT");
  }
  async function getBNBPrice() {
    return await getCurrentPrice("BNBUSDT");
  }
  async function getTetherPrice() {
    return await getCurrentPrice("TUSDT");
  }
  async function getDogePrice() {
    return await getCurrentPrice("DOGEUSDT");
  }
  return {
    bitcoinHistory: getBitcoinHistory(),
    ethereumHistory: getEthereumHistory(),
    bnbPrice: getBNBPrice(),
    tetherPrice: getTetherPrice(),
    dogePrice: getDogePrice(),
  };
}
