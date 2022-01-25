import React from "react";
import coingecko from "../../utils/coingecko";
import styles from "./styles.module.css";

const Token = ({ name, symbol, thumb, onClick }) => (
  <button className={styles.tokenCard} onClick={onClick}>
    <div>
      <img width={25} src={thumb} alt="" />
    </div>
    <div className={styles.symbolContainer}>
      <p>{symbol}</p>
      <span className={styles.walletDirection}>{name}</span>
    </div>
  </button>
);

const TokenList = ({ coins, handleCoinSelected }) => {
  const handleOnClick = async (id) => {
    const coinData = await coingecko.coinById(id);
    handleCoinSelected(coinData);
  };

  return (
    <ul className={styles.listContainer}>
      {coins.map(({ id, name, symbol, thumb }) => (
        <li key={id}>
          <Token
            name={name}
            symbol={symbol}
            thumb={thumb}
            onClick={() => handleOnClick(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TokenList;
