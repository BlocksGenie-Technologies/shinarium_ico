import React from "react";
import styles from "./styles.module.css";

const TokenInput = () => {
  return (
    <div className={styles.inputWrapper}>
      <input
        id="token"
        className={styles.input}
        inputmode="decimal"
        autocomplete="off"
        autocorrect="off"
        type="text"
        pattern="^[0-9]*[.,]?[0-9]*$"
        placeholder="0.0"
        minlength="1"
        maxlength="79"
        spellcheck="false"
      />
      <button className={styles.changeAsset}>
        <img
          width={25}
          src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
          alt=""
        />
        <span>ETH</span>
        <span>▼</span>
      </button>
    </div>
  );
};

export default TokenInput;
