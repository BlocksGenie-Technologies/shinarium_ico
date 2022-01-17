import React from "react";
import styles from "./styles.module.css";

const Swap = () => {
  return (
    <div className={styles.swapContainer}>
      <label htmlFor="token-1">Token 1</label>
      <input type="number" id="token-1" />
      <button onClick={(e) => e.preventDefault()}>change order</button>
      <label htmlFor="token-2">Token 2</label>
      <input type="number" id="token-2" />
      <button onClick={(e) => e.preventDefault()}>Connect wallet</button>
    </div>
  );
};

export default Swap;
