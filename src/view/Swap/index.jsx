import React from "react";
import InterchangeButton from "../../components/InterchangeButton";
import MainButton from "../../components/MainButton";
import TokenInput from "../../components/TokenInput";
import styles from "./styles.module.css";

const Swap = () => {
  return (
    <div className={styles.swapContainer}>
      <TokenInput />
      <InterchangeButton />
      <TokenInput />
      <MainButton />
    </div>
  );
};

export default Swap;
