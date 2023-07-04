<script>
  export let disabled = false;
  export let text = "";
  export let action;
  export let icon = "";
</script>

<button
  {disabled}
  on:click={action}
  class="disabled:brightness-50 px-2.5 py-2 rounded-md relative overflow-hidden group bg-zinc-500 enabled:hover:bg-gradient-to-r enabled:hover:from-zinc-500 enabled:hover:to-zinc-400 text-white enabled:hover:ring-2 enabled:hover:ring-offset-2 enabled:hover:ring-zinc-400 transition-all ease-out duration-300"
>
  <span
    class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 enabled:group-hover:-translate-x-40 ease"
  />
  <span class="relative flex items-center gap-2"><i class={icon} />{text}</span>
</button>
