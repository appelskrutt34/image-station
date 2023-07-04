<script>
  import "../app.css";
  import Footer from "$lib/components/shared/Footer.svelte";
  import Navbar from "$lib/components/shared/Navbar.svelte";
  import { innerWidth, innerHeight } from "$lib/stores/data";
</script>

<svelte:window bind:innerWidth={$innerWidth} bind:innerHeight={$innerHeight} />

<div class="bg-zinc-900 text-zinc-50 font-roboto relative">
  <Navbar />

  <main>
    <slot />
  </main>
</div>
