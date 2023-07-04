<script>
  import IconLink from "../lib/components/IconLink.svelte";
  import ImageCarousel from "./sections/ImageCarousel.svelte";
  export let data;
</script>

<article
  class="px-4 flex flex-col items-center w-full pt-20 lg:pt-16"
  aria-label="Home page"
  style="min-height: 100vh;"
>
  <section class="w-full pb-4" aria-label="Gallery showcase">
    <ImageCarousel images={data.showcase} />
  </section>
  <IconLink text="Art gallery" icon="lnr lnr-pointer-right" link="/gallery" />
  <section class="text-center py-40">
    <h1
      class="md:text-6xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-50"
    >
      Interactive Web
    </h1>
    <h2 class="md:text-3xl lg:text-4xl mt-2">
      Showcasing HTML, CSS, and JavaScript skills
    </h2>

    <p class="mt-16">
      Images by <a href="https://stablecog.com" class="underline">Stablecog</a>
    </p>
    <p class="mt-4">
      Text by <a href="https://openai.com/" class="underline">ChatGPT</a>
    </p>
  </section>
  <p class="animate-bounce">Try me on all screen sizes</p>
</article>
