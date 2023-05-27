<script>
  import "../app.css";
  import Navbar from "../lib/components/shared/Navbar.svelte";
</script>

<div class="bg-zinc-900 text-zinc-50">
  <Navbar />
  <main>
    <slot />
  </main>
</div>
