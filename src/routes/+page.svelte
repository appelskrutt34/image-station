<script>
  import IconsBoard from "./sections/IconsBoard.svelte";
  import ImageCarousel from "./sections/ImageCarousel.svelte";
  import ProductGrid from "./sections/ProductGrid.svelte";
</script>

<div
  class="pt-20 px-4 flex flex-col items-center w-full"
  style="min-height: 200vh;"
>
  <section class="mt-4 container" aria-label="Showcase">
    <ImageCarousel />
  </section>
  <section class="mt-4 container sticky top-20" aria-label="Categories">
    <IconsBoard />
  </section>
  <section class="mt-4 container" aria-label="Products">
    <ProductGrid />
  </section>
</div>
