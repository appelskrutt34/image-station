import { PRIVATE_RAPID_API } from "$env/static/private";
import { PUBLIC_RAPID_API_HOST } from "$env/static/public";

export async function getCovidStats() {
  const url = "https://covid-19-statistics.p.rapidapi.com/reports";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": PRIVATE_RAPID_API,
      "X-RapidAPI-Host": PUBLIC_RAPID_API_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
  } catch (error) {
    console.error(error);
  }
}
