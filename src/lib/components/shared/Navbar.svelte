<script>
  import DropdownMenu from "./DropdownMenu.svelte";
  import NavLink from "./NavLink.svelte";

  import { introduction, ethics } from "$lib/data/categories";

  let openMenu = false;
</script>

<nav
  class="bg-zinc-900 text-zinc-500 fixed top-0 px-6 h-16 w-full hidden md:flex justify-center z-10"
>
  <div class="container flex-row items-center flex gap-6">
    <a href="/"
      ><img src="logo-no-text.png" alt="logo" class="h-12 w-auto" />
    </a>

    <DropdownMenu items={introduction}>
      <NavLink text="AI Dropdown" link="" />
    </DropdownMenu>
    <NavLink text="Graphs" link="/statistics" />
    <DropdownMenu items={ethics}>
      <NavLink text="Cookies" link="" />
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
      <o class="lnr lnr-cross text-2xl" />
    {:else}
      <i class="lnr lnr-menu text-2xl" />
    {/if}
  </button>

  {#if openMenu}
    <div class="w-full aboslute flex flex-col gap-6 items-center">
      <a href="">Explore</a>
      <a href="">Learn</a>
      <a href="">Shop</a>
      <a href="">Jobs</a>
    </div>
  {/if}
</nav>
