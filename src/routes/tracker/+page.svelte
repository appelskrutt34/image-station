<script>
  import { fade } from "svelte/transition";
  import Form from "./components/Form.svelte";
  import Transactions from "./components/Transactions.svelte";
  import { onMount } from "svelte";
  export let form;

  let show = false;
  onMount(() => {
    show = true;
  });
</script>

<article
  class="px-4 flex flex-col items-center justify-center w-full py-24 lg:py-0"
  aria-label="Ethereum tracker"
  style="min-height: 100vh;"
>
  {#if show}
    <div in:fade class="container flex flex-col items-center justify-center">
      <div class="pb-16 text-center">
        <h1>Ethereum Wallet Tracker</h1>
        <h2>Monitor Transaction History and Balances</h2>
        <p class="pt-2">
          Statistics: <a href="https://moralis.io/" class="underline"
            >Moralis API</a
          >
        </p>
      </div>

      <Form />
      {#if form?.transactions}
        <Transactions
          transactions={form.transactions}
          address={form.address}
          balance={form.balance}
        />
      {/if}
    </div>
  {/if}
</article>
