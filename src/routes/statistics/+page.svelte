<script>
  import { onDestroy, onMount } from "svelte";
  import { fade, scale } from "svelte/transition";
  import TimeIntervalChart from "$lib/components/charts/TimeIntervalChart.svelte";
  import { getPriceHistory, getCurrentPrice } from "$lib/api/binance";
  export let data;

  let bitcoinHistory = data.bitcoinHistory;
  let ethereumHistory = data.ethereumHistory;
  let bnbPrice = data.bnbPrice;
  let tetherPrice = data.tetherPrice;
  let show = false;
  let dogePrice = data.dogePrice;
  let priceInterval;

  onMount(() => {
    show = true;

    priceInterval = setInterval(async () => {
      bnbPrice = await getBNBPrice();
      tetherPrice = await getTetherPrice();
      dogePrice = await getDogePrice();
    }, 1000 * 10);
  });

  onDestroy(() => {
    clearInterval(priceInterval);
  });

  async function getBitcoinHistory(event) {
    if (!event) return;
    bitcoinHistory = {};
    bitcoinHistory = await getPriceHistory(event.detail.time, "BTCUSDT");
  }
  async function getEthereumHistory(event) {
    if (!event) return;
    ethereumHistory = {};
    ethereumHistory = await getPriceHistory(event.detail.time, "ETHUSDT");
  }
  async function getBNBPrice() {
    bnbPrice = 0;
    return await getCurrentPrice("BNBUSDT");
  }
  async function getTetherPrice() {
    tetherPrice = 0;
    return await getCurrentPrice("TUSDT");
  }
  async function getDogePrice() {
    dogePrice = 0;
    return await getCurrentPrice("DOGEUSDT");
  }
</script>

<article
  class="px-4 flex flex-col justify-center items-center w-full py-24 lg:py-0"
  aria-label="AI timeline"
  style="min-height: 100vh;"
>
  {#if show}
    <div in:fade>
      <div class="pb-16 text-center">
        <h1>Visualizing Data</h1>
        <h2>Exploring Insights Through Graphs and Charts</h2>
        <p class="pt-2">
          Statistics: <a
            href="https://www.binance.com/en/binance-api"
            class="underline">Binance API</a
          >
        </p>
      </div>
    </div>

    <div
      class="container flex gap-8 flex-col items-center justify-center text-center"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
        <div class="border-2 border-zinc-50 rounded-md pt-4 w-full">
          <div class="h-96">
            <TimeIntervalChart
              height="h-96"
              title="Bitcoin price history"
              on:updateTimeInterval={getBitcoinHistory}
              color="#ea580c"
              data={{ data: bitcoinHistory.prices, name: "BTC" }}
              labels={bitcoinHistory.timestamps}
              id="statistics3"
            />
          </div>
        </div>

        <div class="border-2 border-zinc-50 rounded-md pt-4 w-full">
          <div class="h-96">
            <TimeIntervalChart
              height="h-96"
              title="Ethereum price history"
              on:updateTimeInterval={getEthereumHistory}
              color="#0284c7"
              data={{ data: ethereumHistory.prices, name: "ETH" }}
              labels={ethereumHistory.timestamps}
              id="statistics4"
            />
          </div>
        </div>

        <!--- 
        <div class="border-2 border-zinc-50 rounded-md pt-4">
          <h2>Blue vs Green</h2>
          <div class="h-96">
            <BaseChart
              type="line"
              colors={["#0284c7", "#0d9488"]}
              data={[
                {
                  name: "Blue",
                  data: [31, 40, 28, 51, 42, 109, 100],
                },
                {
                  name: "Green",
                  data: [11, 32, 45, 32, 34, 52, 41],
                },
              ]}
              id="statistics1"
            />
          </div>
        </div>

        <div class="border-2 border-zinc-50 rounded-md pt-4">
          <h2>Pink vs Purple</h2>
          <div class="h-96">
            <BaseChart
              type="bar"
              colors={["#7e22ce", "#be185d"]}
              data={[
                {
                  name: "Purple",
                  data: [31, 40, 28, 51, 42, 109, 100],
                },
                {
                  name: "Pink",
                  data: [11, 32, 45, 32, 34, 52, 41],
                },
              ]}
              id="statistics2"
            />
          </div>
        </div>-->
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full">
        <div
          class="h-44 border-2 border-zinc-50 rounded-md py-4 justify-center flex flex-col"
        >
          <h2 class="pb-4">BNB</h2>
          <div class="h-full flex items-center justify-center">
            {#if bnbPrice > 0}
              <p in:scale out:scale class="text-2xl lg:text-6xl font-bold">
                {bnbPrice}$
              </p>
            {/if}
          </div>
        </div>

        <div
          class="h-44 border-2 border-zinc-50 rounded-md py-4 justify-center flex flex-col"
        >
          <h2 class="pb-4">Tether</h2>
          <div class="h-full flex items-center justify-center">
            {#if tetherPrice > 0}
              <p in:scale out:scale class="text-2xl lg:text-6xl font-bold">
                {tetherPrice}$
              </p>
            {/if}
          </div>
        </div>

        <div
          class="h-44 border-2 border-zinc-50 rounded-md py-4 justify-center flex flex-col"
        >
          <h2 class="pb-4">DOGE</h2>
          <div class="h-full flex items-center justify-center">
            {#if dogePrice > 0}
              <p in:scale out:scale class="text-2xl lg:text-6xl font-bold">
                {dogePrice}$
              </p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/if}
</article>
