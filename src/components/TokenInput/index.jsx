import React from "react";
import styles from "./styles.module.css";

const TokenInput = ({ tokenData, changeToken }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        id="token"
        className={styles.input}
        inputMode="decimal"
        autoComplete="off"
        autoCorrect="off"
        type="text"
        pattern="^[0-9]*[.,]?[0-9]*$"
        placeholder="0.0"
        minLength="1"
        maxLength="79"
        spellCheck="false"
      />
      {tokenData ? (
        <button className={styles.changeAsset} onClick={changeToken}>
          <img width={22} src={tokenData.image.thumb} alt="" />
          <span className={styles.symbol}>
            {tokenData.symbol.toUpperCase()}
          </span>
          <span>▼</span>
        </button>
      ) : (
        <button
          className={`${styles.changeAsset} ${styles.noAssetButton}`}
          onClick={changeToken}
        >
          <span>Select a token</span>
          <span>▼</span>
        </button>
      )}
    </div>
  );
};

export default TokenInput;
