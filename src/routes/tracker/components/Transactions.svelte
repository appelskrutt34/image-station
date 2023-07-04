<script>
  import LabelChart from "$lib/components/charts/LabelChart.svelte";
  export let transactions;
  export let address;
  export let balance;
  let ethFormatter = function (value) {
    return value + " ETH";
  };
</script>

<div class="text-center my-8">
  <h2 class="break-all font-bold">
    {address}
  </h2>
  <p>
    Balance: {balance} ETH
  </p>
</div>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
  <div class="border-2 border-zinc-50 rounded-md text-center pt-4 w-full">
    <h2>Ethereum recieved</h2>
    <p>Transactions: {transactions.incommingTransactions.totalTransactions}</p>
    <p>
      Total: {transactions.incommingTransactions.totalValue} ETH
    </p>

    <div class="h-72">
      <LabelChart
        data={transactions.incommingTransactions.series}
        labels={transactions.incommingTransactions.labels}
        id={"incommingTransactions"}
        yFormatter={ethFormatter}
      />
    </div>
  </div>

  <div class="border-2 border-zinc-50 rounded-md text-center pt-4 w-full">
    <div>
      <h2 class="w-full">Ethereum sent</h2>
      <p>
        Transactions: {transactions.outgoingTransactions.totalTransactions}
      </p>
      <p>
        Total: {transactions.outgoingTransactions.totalValue} ETH
      </p>
    </div>

    <div class="h-72">
      <LabelChart
        data={transactions.outgoingTransactions.series}
        labels={transactions.outgoingTransactions.labels}
        id={"outgoingTransactions"}
        yFormatter={ethFormatter}
      />
    </div>
  </div>
</div>
