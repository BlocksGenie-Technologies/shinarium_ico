import {React, useState} from "react";

import Header from "./../components/Header";
import InterchangeButton from "./../components/InterchangeButton";
import MainButton from "./../components/MainButton";
import styles from "./styles.module.css";

const App = () => {
  const[amount, setAmount]= useState(0);

  return (
    <>
      <Header />
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
        <button className={styles.changeAsset}>
          <img width={22} src={"https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850"} alt="" />
          <span className={styles.symbol}>{"BNB"}</span>
        </button>
      </div>
      <InterchangeButton />
      <div className={styles.inputWrapper}>
        <input
          id="token"
          className={styles.input}
          value={(amount * 3622222).toFixed(3)}
          disabled
        />
        <button className={styles.changeAsset}>
          <img width={22} src={"https://i.imgur.com/PbLgy6N.jpeg"} alt="" />
          <span className={styles.symbol}>{"SHINA"}</span>
        </button>
      </div>
      <MainButton />
    </>
  );
};

export default App;
