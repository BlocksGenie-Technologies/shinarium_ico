import React from "react";
import styles from "./styles.module.css";

const Token = ({ name, symbol, thumb }) => (
  <button className={styles.tokenCard}>
    <div>
      <img width={25} src={thumb} alt="" />
    </div>
    <div className={styles.symbolContainer}>
      <p>{symbol}</p>
      <span className={styles.walletDirection}>{name}</span>
    </div>
  </button>
);

const TokenList = ({ coins }) => {
  return (
    <ul className={styles.listContainer}>
      {coins.map(({ id, name, symbol, thumb }) => (
        <li key={id}>
          <Token name={name} symbol={symbol} thumb={thumb} />
        </li>
      ))}
    </ul>
  );
};

export default TokenList;
