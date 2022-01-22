import React from "react";
import styles from "./styles.module.css";

const Token = () => (
  <button className={styles.tokenCard}>
    <div>
      <img
        width={30}
        src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
        alt=""
      />
    </div>
    <div>
      <p>ETH</p>
      <span className={styles.walletDirection}>
        0x1243kj56hjk3h6k34GRG32r2FEG3432
      </span>
    </div>
  </button>
);

const TokenList = () => {
  return (
    <ul className={styles.listContainer}>
      <li>
        <Token />
      </li>
      <li>
        <Token />
      </li>
      <li>
        <Token />
      </li>
      <li>
        <Token />
      </li>
    </ul>
  );
};

export default TokenList;
