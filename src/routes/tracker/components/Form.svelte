<script>
  import DropdownButton from "$lib/components/shared/DropdownButton.svelte";
  let walletInput;
</script>

<div class="w-52">
  <DropdownButton
    placeholder="Pick wallet"
    action={(value) => {
      walletInput = value;
    }}
    items={[
      {
        text: "Snoop dog",
        value: "0xCe90a7949bb78892F159F428D0dC23a8E3584d75",
      },
      {
        text: "Justin bieber",
        value: "0xE21DC18513e3e68a52F9fcDaCfD56948d43a11c6",
      },

      {
        text: "Steve Aoki",
        value: "0xe4bbcbff51e61d0d95fcc5016609ac8354b177c4",
      },
      {
        text: "Jay Z",
        value: "0x3b417faee9d2ff636701100891dc2755b5321cc3",
      },
      {
        text: "Post Malone",
        value: "0xbea020c3bd417f30de4d6bd05b0ed310ac586cc0",
      },
      {
        text: "Paris hilton",
        value: "0xb6aa5a1aa37a4195725cdf1576dc741d359b56bd",
      },
    ]}
  />
</div>
<form method="POST" action="?/track" class="mt-8 w-full lg:w-1/2">
  <input
    bind:value={walletInput}
    name="wallet"
    class="rounded-md mb-4 w-full text-zinc-900 border-neutral-50 px-4 py-2 focus:outline-none focus:border-sky-600"
    type="text"
    aria-label="input wallet address"
    placeholder="Wallet address"
    required
    pattern={"^0x[a-fA-F0-9]{40}$"}
  />
  <button
    type="submit"
    class="w-full relative rounded-md px-2.5 py-2 overflow-hidden group bg-zinc-500 enabled:hover:bg-gradient-to-r enabled:hover:from-zinc-500 enabled:hover:to-zinc-400 text-white enabled:hover:ring-2 enabled:hover:ring-offset-2 enabled:hover:ring-zinc-400 transition-all ease-out duration-300"
  >
    <span
      class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-zinc-50 opacity-10 rotate-12 enabled:group-hover:-translate-x-40 ease"
    />
    <span class="relative flex items-center gap-2 justify-center"
      ><i class="lnr lnr-magnifier" />Track</span
    >
  </button>
</form>
