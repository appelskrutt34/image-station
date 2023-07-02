<script>
  import "../app.css";
  import Footer from "../lib/components/shared/Footer.svelte";
  import Navbar from "../lib/components/shared/Navbar.svelte";
</script>

<div
  class="bg-zinc-900 text-zinc-50 font-roboto relative"
  style="min-height: 100vh;"
>
  <Navbar />

  <main>
    <slot />
  </main>
</div>
