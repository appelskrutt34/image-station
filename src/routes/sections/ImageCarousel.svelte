<script>
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  let images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  let innerWidth = 0;
  let innerHeight = 0;

  $: particlesToShow = innerWidth > 768 ? 4 : 2;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div>
  {#if browser}
    <Carousel {particlesToShow} particlesToScroll={1} dots={false}>
      {#each images as image}
        <div class="p-2 bg-transparent">
          <button
            class="bg-zinc-500 p-14 rounded-md group transition-all text-center w-full"
          >
            <h1 class="group-hover:scale-125 transition-all">
              {image}
            </h1>
          </button>
        </div>
      {/each}
    </Carousel>
  {/if}
</div>
