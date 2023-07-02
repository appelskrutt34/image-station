import { getGallery } from "$lib/api/directus";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const pictures = await getGallery(24, 0);
  return { pictures };
}
