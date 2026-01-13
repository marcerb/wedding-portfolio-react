const UNSPLASH_BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export function getWeddingPhotos() {
  return fetch(`${UNSPLASH_BASE_URL}/search/photos?query=wedding&per_page=9`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
}
