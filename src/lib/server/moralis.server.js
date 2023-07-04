import Moralis from "moralis";
import dotenv from "dotenv";
import { fromWei } from "web3-utils";
dotenv.config();

try {
  await Moralis.start({
    apiKey: process.env.PRIVATE_MORALIS_KEY,
  });
} catch (error) {}

export async function getbalanceByOwner(owner, network) {
  try {
    const response = await Moralis.EvmApi.balance.getNativeBalance({
      chain: network,
      address: owner,
    });
    return parseFloat(fromWei(response.jsonResponse.balance, "ether")).toFixed(
      3
    );
  } catch (error) {
    console.error(error);
  }
  return {};
}

export async function getNftsByOwner(owner, network) {
  console.log("Key " + process.env.PRIVATE_MORALIS_KEY);
  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    chain: network,
    format: "decimal",
    limit: 12,
    address: owner,
  });
  let nfts = [];
  try {
    for (const n of response.jsonResponse.result) {
      let nft = { name: n.name };
      if (n.media && n.media.original_media_url) {
        nft.image = n.media.original_media_url.replace(
          "ipfs://",
          "https://ipfs.io/ipfs/"
        );
      } else if (n.metadata) {
        try {
          let image = JSON.parse(n.metadata).image;
          if (image) {
            nft.image = image.replace("ipfs://", "https://ipfs.io/ipfs/");
          }
        } catch (error) {}
      }
      if (n.token_uri) {
        nft.tokenUri = n.token_uri;
      }
      nfts.push(nft);
    }
  } catch (error) {
    console.error(error);
  }
  return nfts;
}

export async function getTransactionsByOwner(owner, network) {
  try {
    const response = await Moralis.EvmApi.transaction.getWalletTransactions({
      chain: network,
      address: owner,
      include: "internal_transactions",
      fromDate: "01/01/2015",
    });

    let incommingTimestamp = [];
    let incommingValue = [];
    let incommingValueTotal = 0;

    let outgoingTimestamp = [];
    let outgoingValue = [];
    let outgoingValueTotal = 0;

    let totalOutgoingTransactions = 0;
    let totalIncommingTransactions = 0;

    let cursor = null;

    do {
      for (let i = 0; i < response.jsonResponse.result.length; i++) {
        if (
          response.jsonResponse.result[i].from_address == owner.toLowerCase()
        ) {
          outgoingTimestamp.push(
            new Date(
              response.jsonResponse.result[i].block_timestamp
            ).toLocaleString()
          );
          let value = fromWei(response.jsonResponse.result[i].value, "ether");
          outgoingValueTotal += parseFloat(value);
          outgoingValue.push(parseFloat(value).toFixed(3));
          totalOutgoingTransactions++;
        } else {
          incommingTimestamp.push(
            new Date(
              response.jsonResponse.result[i].block_timestamp
            ).toLocaleString()
          );
          let value = fromWei(response.jsonResponse.result[i].value, "ether");
          incommingValueTotal += parseFloat(value);
          incommingValue.push(parseFloat(value).toFixed(3));
          totalIncommingTransactions++;
        }
      }

      cursor = response.cursor;
    } while (cursor != "" && cursor != null);

    incommingValue.reverse();
    incommingTimestamp.reverse();
    outgoingValue.reverse();
    outgoingTimestamp.reverse();

    return {
      incommingTransactions: {
        series: [
          {
            name: "value",
            data: incommingValue,
          },
        ],
        labels: incommingTimestamp,
        totalValue: incommingValueTotal.toFixed(3),
        totalTransactions: totalIncommingTransactions,
      },
      outgoingTransactions: {
        series: [
          {
            name: "value",
            data: outgoingValue,
          },
        ],
        labels: outgoingTimestamp,
        totalValue: outgoingValueTotal.toFixed(3),
        totalTransactions: totalOutgoingTransactions,
      },
    };
  } catch (error) {
    console.error(error);
  }
  return {};
}

function formatDate(d) {
  var month = d.getMonth();
  var day = d.getDate().toString().padStart(2, "0");
  var year = d.getFullYear();
  year = year.toString().substr(-2);
  month = (month + 1).toString().padStart(2, "0");
  return month + "/" + day + "/" + year;
}
