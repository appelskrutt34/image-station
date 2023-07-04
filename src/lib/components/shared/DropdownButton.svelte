<script>
  import { scale, slide } from "svelte/transition";
  export let items = ["recent", "popular", "price lowest"];
  export let placeholder = "dropdown";
  export let action = () => {};

  let showMenu = false;
  let mouseOverMenu = false;

  function onSelect(item) {
    placeholder = item.text;
    showMenu = false;
    action(item.value);
  }
</script>

<div
  class="relative group w-full"
  on:mouseleave={() => {
    if (mouseOverMenu == false) showMenu = false;
  }}
>
  <button
    on:click={() => {
      showMenu = !showMenu;
    }}
    class="rounded-md px-3 py-2 bg-zinc-800 flex flex-row justify-between w-full items-center"
  >
    {placeholder}

    {#if showMenu}
      <i in:scale class="lnr lnr-chevron-up-circle" />
    {:else}
      <i in:scale class="lnr lnr-chevron-down-circle" />
    {/if}
  </button>

  {#if showMenu}
    <div
      in:slide={{ duration: 50 }}
      out:slide={{ duration: 50 }}
      class="absolute w-full z-20"
      on:mouseleave={() => {
        mouseOverMenu = false;
        showMenu = false;
      }}
      on:mouseenter={() => {
        mouseOverMenu = true;
      }}
    >
      <div class="bg-zinc-800 rounded-md py-2 px-2 flex-col flex gap-1 mt-4">
        {#each items as item}
          <button
            on:click={() => {
              onSelect(item);
            }}
            class={"relative rounded-md overflow-hidden group/item hover:bg-zinc-500 hover:bg-gradient-to-r hover:from-zinc-500 hover:to-zinc-400 text-white transition-all ease-out duration-300 " +
              "p-2"}
          >
            <span
              class="absolute right-0 w-8 h-44 -mt-32 transition-all duration-1000 transform translate-x-32 bg-white opacity-10 rotate-12 group-hover/item:-translate-x-40 ease"
            />
            <span class="relative flex items-center gap-2">{item.text}</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
