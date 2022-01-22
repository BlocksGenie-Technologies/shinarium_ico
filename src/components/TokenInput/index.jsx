import React from "react";
import useLateralPanel from "../../hooks/useLateralPanel";
import styles from "./styles.module.css";

const TokenInput = () => {
  const [openPanel] = useLateralPanel({
    title: "Select a token",
    content: <div>Select token content</div>
  });

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
      <button className={styles.changeAsset} onClick={openPanel}>
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
