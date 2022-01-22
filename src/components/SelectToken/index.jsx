import React from "react";
import styles from "./styles.module.css";
import TokenList from "./TokenList";

const SelectToken = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.inputSearch}
        type="text"
        placeholder="Token name, address, symbol"
      />
      <TokenList />
    </div>
  );
};

export default SelectToken;
