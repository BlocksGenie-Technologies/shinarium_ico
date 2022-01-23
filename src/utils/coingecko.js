const API_URL = "https://api.coingecko.com/api/v3";

const search = async (query) => {
  if (!query) return;

  const res = await fetch(`${API_URL}/search?query=${query}`);
  const data = await res.json();

  return data;
};

export default { search };
