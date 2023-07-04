import { getGallery } from "$lib/api/directus";
export let ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
  const showcase = await getGallery(8);
  return { showcase };
}
