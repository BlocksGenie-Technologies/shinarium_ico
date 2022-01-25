const API_URL = "https://api.coingecko.com/api/v3";

const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const search = async (query) => {
  if (!query) return;
  const data = await fetchData(`${API_URL}/search?query=${query}`);
  return data;
};

const coinById = (id) => {
  if (!id) return;
  const data = fetchData(
    `${API_URL}/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
  );
  return data;
};

export default { search, coinById };
