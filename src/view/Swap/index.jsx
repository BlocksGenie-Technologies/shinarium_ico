import React from "react";
import InterchangeButton from "../../components/InterchangeButton";
import TokenInput from "../../components/TokenInput";
import styles from "./styles.module.css";

const Swap = () => {
  return (
    <div className={styles.swapContainer}>
      <TokenInput />
      <InterchangeButton />
      <TokenInput />
      <button onClick={(e) => e.preventDefault()}>Connect wallet</button>
    </div>
  );
};

export default Swap;
