<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import IconButton from "$lib/components/buttons/IconButton.svelte";
  import { getGallery } from "$lib/api/directus";

  export let data;

  let filtered = data.pictures;
  let page = 0;
  let fetchedPages = 2;
  let pagesLeftToFetch = true;
  let filteredPerPage = 12;
  let sliceIndex = filteredPerPage;

  $: sliceIndex = calculateSliceIndex(page);
  $: visible = filtered.slice(page, sliceIndex);

  function calculateSliceIndex(page) {
    if (page == 0) return filteredPerPage;
    if (page + filteredPerPage > filtered.length) return filtered.length;
    return page + filteredPerPage;
  }

  let show = false;
  onMount(() => {
    show = true;
  });

  async function getMore() {
    if (pagesLeftToFetch == false) return;
    fetchedPages++;
    const more = await getGallery(12, fetchedPages);
    if (more.length > 0) {
      filtered = filtered.concat(more);
    } else pagesLeftToFetch = false;
  }
</script>

<article
  class="px-4 flex flex-col items-center w-full justify-center py-24 lg:py-0"
  aria-label="AI art gallery"
  style="min-height: 100vh;"
>
  {#if show}
    <div in:fade class="container">
      <div class="pb-8 text-center">
        <h1>Data Dreams</h1>
        <h2>AI's Interpretation of Itself</h2>
        <p class="pt-2">
          Images dynaimcally fetched from <a
            href="https://directus.io/"
            class="underline">Directus</a
          >
        </p>
      </div>
      <section
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 lg:min-h-[912px]"
      >
        {#each visible as img}
          <img src={img} alt="" class="rounded-md w-full h-72 object-cover" />
        {/each}
      </section>
      <div class="flex justify-end mt-4">
        <div>
          <IconButton
            disabled={page <= 0}
            icon="lnr lnr-chevron-left"
            action={() => {
              page -= filteredPerPage;
            }}
          />
          <IconButton
            disabled={sliceIndex == filtered.length}
            icon="lnr lnr-chevron-right"
            action={() => {
              page += filteredPerPage;
              getMore();
            }}
          />
        </div>
      </div>
    </div>
  {/if}
</article>
