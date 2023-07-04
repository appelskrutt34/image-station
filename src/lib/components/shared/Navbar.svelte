<script>
  import DropdownMenu from "$lib/components/buttons/DropdownMenu.svelte";
  import NavLink from "./NavLink.svelte";

  import { introduction, graphs } from "$lib/data/categories";
  import { fade, slide } from "svelte/transition";

  let openMenu = false;
</script>

<nav
  class="bg-zinc-900 text-zinc-500 fixed top-0 px-4 h-16 w-full hidden md:flex justify-center z-10"
>
  <div class="container flex-row items-center flex gap-6">
    <a href="/" class="pr-8"
      ><img src="logo-no-text.png" alt="logo" class="h-12 w-auto" />
    </a>

    <DropdownMenu items={introduction}>
      <NavLink text="AI" link="" />
    </DropdownMenu>
    <DropdownMenu items={graphs}>
      <NavLink text="Web3" link="" />
    </DropdownMenu>
  </div>
</nav>

<nav
  class="fixed flex flex-col items-end md:hidden bg-zinc-900 text-zinc-500 gap-6 top-0 p-6 w-full z-10"
>
  <button
    class="w-min"
    on:click={() => {
      openMenu = !openMenu;
    }}
  >
    {#if openMenu}
      <i in:fade class="lnr lnr-cross text-2xl" />
    {:else}
      <i in:fade class="lnr lnr-menu text-2xl" />
    {/if}
  </button>

  {#if openMenu}
    <div
      in:slide
      out:slide
      class="w-full aboslute flex flex-col gap-6 items-center text-zinc-50"
    >
      <a
        href="/"
        on:click={() => {
          openMenu = !openMenu;
        }}>Home page</a
      >
      <a
        href="/history"
        on:click={() => {
          openMenu = !openMenu;
        }}>AI timeline</a
      >
      <a
        href="/about"
        on:click={() => {
          openMenu = !openMenu;
        }}>About AI</a
      >
      <a
        href="/gallery"
        on:click={() => {
          openMenu = !openMenu;
        }}>AI art gallery</a
      >
      <a
        href="/statistics"
        on:click={() => {
          openMenu = !openMenu;
        }}>Biance API</a
      >
      <a
        href="/tracker"
        on:click={() => {
          openMenu = !openMenu;
        }}>ETH tracker</a
      >
    </div>
  {/if}
</nav>
