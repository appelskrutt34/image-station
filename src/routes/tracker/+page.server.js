import {
  getTransactionsByOwner,
  getbalanceByOwner,
  getNftsByOwner,
} from "$lib/server/moralis.server.js";
/** @type {import('./$types').Actions} */
export const actions = {
  track: async ({ request }) => {
    let data = await request.formData();
    let address = data.get("wallet");
    let network = data.get("network");
    let transactions = await getTransactionsByOwner(address, network);
    let balance = await getbalanceByOwner(address, network);
    let nfts = await getNftsByOwner(address, network);
    return {
      transactions: transactions,
      nfts: nfts,
      balance: balance,
      address: address,
    };
  },
};
