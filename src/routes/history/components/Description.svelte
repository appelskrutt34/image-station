<script>
  import { fade } from "svelte/transition";
  export let text = "";
  export let title = "title";
  export let alignRight = true;
  let show = false;
</script>

<span
  aria-label="description"
  class="w-16 h-16 hover:cursor-pointer font-bold hover:text-zinc-400 hidden lg:inline"
  on:mouseenter={() => {
    show = true;
  }}
  on:mouseleave={() => {
    show = false;
  }}>...</span
>
<span
  aria-label="description"
  class="w-16 h-16 hover:cursor-pointer font-bold hover:text-zinc-400 inline lg:hidden"
  on:mousedown={() => {
    show = true;
  }}>...</span
>

{#if show}
  <div
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 200 }}
    class="lg:hidden fixed w-full h-full top-0 bottom-0 right-0 left-0 bg-zinc-500/70 z-[100]"
  />
  <div
    in:fade={{ duration: 100 }}
    out:fade={{ duration: 100 }}
    class={" bg-zinc-800  max-w-[560px] p-4 rounded-lg  shadow-xl text-left fixed lg:absolute group-hover:opacity-100 transition-all duration-200 lg:top-16 lg:bottom-auto z-[101] " +
      (alignRight
        ? "left-4 right-4 top-0 bottom-0 h-min m-auto lg:right-4 lg:left-auto lg:rounded-br-3xl"
        : "left-4 right-4 top-0 bottom-0 h-min m-auto lg:left-4 lg:right-auto lg:rounded-bl-3xl")}
  >
    <div class="flex justify-between items-center mb-1 lg:hidden relative">
      <h2 class="font-bold pr-6">{title}</h2>
      <button
        type="button"
        on:click={() => (show = false)}
        class="absolute top-1 right-1"
      >
        <span class="sr-only">Close description</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <p>{text}</p>
  </div>
{/if}
