<script>
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  import IconButton from "$lib/components/buttons/IconButton.svelte";
  import { innerWidth } from "$lib/stores/data";
  export let images = [];
  $: particlesToShow = $innerWidth > 1024 ? 6 : $innerWidth > 768 ? 4 : 2;
</script>

<div>
  {#if browser}
    <Carousel
      autoplay
      let:showPrevPage
      let:showNextPage
      {particlesToShow}
      particlesToScroll={1}
      dots={false}
      auto={true}
    >
      <button slot="prev" disabled>
        <IconButton action={showPrevPage} icon="lnr lnr-chevron-left" />
      </button>

      {#each images as img}
        <div class="p-2 bg-transparent">
          <img
            style="height: 20vw; min-height: 300px; max-height: 400px;"
            src={img}
            alt="showcase"
            class="rounded-md object-cover w-full"
          />
        </div>
      {/each}
      <button slot="next" disabled>
        <IconButton action={showNextPage} icon="lnr lnr-chevron-right" />
      </button>
    </Carousel>
  {/if}
</div>
