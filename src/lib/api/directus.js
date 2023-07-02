const API = "https://directus-production-ff82.up.railway.app/";

export async function getHistory() {
  let response = await fetch(API + "items/History");
  let json = await response.json();
  return json.data;
}

export async function getGallery(limit = null, page = 0) {
  const queryParams = new URLSearchParams({
    limit: limit,
    page: page,
  });

  try {
    const url = `${API}files?${queryParams.toString()}`;
    const response = await fetch(url);
    let json = await response.json();
    return json.data.map(function (i) {
      return API + "assets/" + i.id;
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getShowcase(limit) {
  try {
    const queryParams = new URLSearchParams({
      limit: limit,
    });
    const url = `${API}files?${queryParams.toString()}`;
    const response = await fetch(url);
    let json = await response.json();
    return json.data.map(function (i) {
      return API + "assets/" + i.id;
    });
  } catch (error) {
    console.error(error);
  }
}
