<script>
  import DropdownMenu from "./DropdownMenu.svelte";
  import NavLink from "./NavLink.svelte";

  let menuItems = [
    {
      link: "",
      icon: "lnr lnr-drop",
      text: "Gallery",
    },
    {
      link: "",
      icon: "lnr lnr-sun",
      text: "Blogs",
    },
    {
      link: "",
      icon: "lnr lnr-cloud",
      text: "Magazine",
    },
  ];

  let openMenu = false;
</script>

<nav
  class="bg-zinc-900 text-zinc-500 fixed top-0 px-6 h-20 w-full hidden md:flex justify-center z-10"
>
  <div class="container flex-row items-center flex gap-6">
    <a href="/"><span class="lnr lnr-bug text-4xl" /></a>

    <DropdownMenu items={menuItems}>
      <NavLink text="Explore" link="" />
    </DropdownMenu>

    <DropdownMenu items={menuItems}>
      <NavLink text="Learn" link="" />
    </DropdownMenu>

    <DropdownMenu items={menuItems}>
      <NavLink text="Shop" link="" />
    </DropdownMenu>

    <DropdownMenu items={menuItems}>
      <NavLink text="Jobs" link="" />
    </DropdownMenu>

    <div class="relative w-full">
      <i
        class="lnr lnr-magnifier absolute"
        style="padding-top: 10px; padding-left: 10px"
      />
      <input
        class="rounded-2xl border-zinc-500 border-2 bg-transparent py-1 pl-8 pr-4 w-full"
        type="text"
        placeholder="Search"
      />
    </div>

    <i class="lnr lnr-cart text-2xl" />
    <button class="bg-zinc-500 text-zinc-50 px-5 py-2 rounded-xl min-w-fit"
      ><i class="lnr lnr-pencil pr-1" /> Sign up
    </button>
    <button class="bg-zinc-500 text-zinc-50 px-5 py-2 rounded-xl min-w-fit">
      <i class="lnr lnr-pointer-right pr-1" />Sign in</button
    >

    <a href=""><div class="border-zinc-500 border-r-4 border-dotted h-6" /></a>
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
