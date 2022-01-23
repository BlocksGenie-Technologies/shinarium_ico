import { useEffect, useState, useCallback } from "react";

import coingecko from "../utils/coingecko";
import debounce from "../utils/debounce";

const useSearchToken = () => {
  const [query, setQuery] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  const search = async (value) => {
    const { coins } = await coingecko.search(value);
    setCoins(coins);
    setIsLoading(false);
  };

  const searchDebounce = useCallback(debounce(search, 700), []);

  const handleChangeQuery = (param) => {
    setQuery(param);
    setIsLoading(true);
    searchDebounce(param);
  };

  return {
    query,
    handleChangeQuery,
    coins,
    isLoading
  };
};

export default useSearchToken;
