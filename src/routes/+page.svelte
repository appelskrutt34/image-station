<script>
  import IconLink from "../lib/components/IconLink.svelte";
  import ImageCarousel from "./sections/ImageCarousel.svelte";
  export let data;
</script>

<article
  class="px-4 flex flex-col items-center w-full pt-16"
  aria-label="Home page"
>
  <section class="w-full pb-4 overflow-clip" aria-label="Gallery showcase">
    <ImageCarousel images={data.showcase} />
  </section>
  <IconLink text="Art gallery" icon="lnr lnr-pointer-right" link="/gallery" />
  <section class="text-center py-40">
    <h1
      class="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-50"
    >
      Interactive Web
    </h1>
    <h2 class="text-4xl mt-2">Showcasing HTML, CSS, and JavaScript skills</h2>

    <p class="mt-16">
      Images by <a href="https://stablecog.com" class="underline">Stablecog</a>
    </p>
    <p class="mt-4">
      Text by <a href="https://openai.com/" class="underline">ChatGPT</a>
    </p>
  </section>
  <p class="animate-bounce">Try me on all screen sizes</p>
</article>
