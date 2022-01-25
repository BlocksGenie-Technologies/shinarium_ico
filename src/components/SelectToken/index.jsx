import React from "react";
import useSearchToken from "../../hooks/useSearchToken";
import styles from "./styles.module.css";
import TokenList from "./TokenList";

const SelectToken = ({ onClose }) => {
  const { query, coins, isLoading, handleChangeQuery } = useSearchToken();

  const waitingForType = !query;
  const successResult = Boolean(coins.length);
  const emptyResult = query && !coins.length && !isLoading;

  return (
    <div className={styles.container}>
      <input
        className={styles.inputSearch}
        type="text"
        placeholder="Token name, address, symbol"
        value={query}
        onChange={(e) => handleChangeQuery(e.target.value)}
      />
      {waitingForType && <p>please type the name of the token</p>}
      {isLoading && <p>loading</p>}
      {successResult && (
        <TokenList coins={coins} handleCoinSelected={onClose} />
      )}
      {emptyResult && <p>Sorry, there's no results.</p>}
    </div>
  );
};

export default SelectToken;
