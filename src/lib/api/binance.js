export async function getPriceHistory(time, symbol) {
  let endTime;
  let startTime;
  let interval;
  let limit;
  switch (time) {
    case "1h":
      endTime = Date.now();
      startTime = endTime - 60 * 60 * 1000; // 1 hour ago
      interval = "5m"; // 5-minute interval
      limit = 12; // 60 minutes / 5 minutes
      break;
    case "24h":
      endTime = Date.now();
      startTime = endTime - 24 * 60 * 60 * 1000; // 24 hours ago
      interval = "1h"; // 1-hour interval
      limit = 24; // 60 minutes / 5 minutes
      break;
    case "1w":
      endTime = Date.now();
      startTime = endTime - 7 * 24 * 60 * 60 * 1000; // 7 days ago
      interval = "1d"; // 1-hour interval
      limit = 7; // 60 minutes / 5 minutes
      break;
    default:
      endTime = Date.now();
      startTime = endTime - 60 * 60 * 1000; // 1 hour ago
      interval = "5m"; // 5-minute interval
      limit = 12; // 60 minutes / 5 minutes
      break;
  }

  try {
    const response = await fetch(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&startTime=${startTime}&endTime=${endTime}&limit=${limit}`
    );
    const data = await response.json();
    let prices = data.map((i) => {
      return parseFloat(i[4]).toFixed(2);
    });
    let timestamps = data.map((i) => {
      return new Date(i[0]).toLocaleString();
    });
    return { prices, timestamps };
  } catch (error) {
    console.error(error);
  }
  return [];
}

export async function getCurrentPrice(symbol) {
  try {
    const response = await fetch(
      `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
    );
    const data = await response.json();
    if (response.ok) {
      const price = parseFloat(data.price);
      return price;
    } else {
      console.log(`Unable to fetch ${symbol} price.`);
    }
  } catch (error) {
    console.log("Error:", error.message);
  }
}
