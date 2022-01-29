import React from "react";
import SearchToken from "./components/SearchToken";
import useLateralPanel from "../../hooks/useLateralPanel";
import styles from "./styles.module.css";

const TokenInput = ({ token, setToken, amount, setAmount }) => {
  const [openPanel] = useLateralPanel({
    title: "Search a token",
    content: <SearchToken />,
    onClose: (tokenData) => {
      const {
        platforms,
        image: { thumb },
        symbol
      } = tokenData;
      const meta = { thumb, symbol };
      setToken({ platforms, meta });
    }
  });
  const {
    meta: { thumb, symbol }
  } = token;

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
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {symbol ? (
        <button className={styles.changeAsset} onClick={openPanel}>
          <img width={22} src={thumb} alt="" />
          <span className={styles.symbol}>{symbol.toUpperCase()}</span>
          <span>▼</span>
        </button>
      ) : (
        <button
          className={`${styles.changeAsset} ${styles.noAssetButton}`}
          onClick={openPanel}
        >
          <span>Select a token</span>
          <span>▼</span>
        </button>
      )}
    </div>
  );
};

export default TokenInput;
