import { getHistory } from "$lib/api/directus";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const history = await getHistory();
  return { history };
}
