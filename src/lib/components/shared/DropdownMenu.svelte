<script>
  export let items = [];
</script>

<div class="relative group">
  <slot />

  <div class="group-hover:flex hover:flex hidden absolute">
    <div
      class="bg-zinc-800 text-zinc-50 rounded-md py-2 px-2 flex-col flex gap-2 mt-4 w-40"
    >
      {#each items as item}
        <a href={item.link} class="hover:bg-zinc-500 pl-2 py-2 rounded-md"
          ><i class={"pr-2 " + item.icon} /> {item.text}</a
        >
      {/each}
    </div>
  </div>
</div>
