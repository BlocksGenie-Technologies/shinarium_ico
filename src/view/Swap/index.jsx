import React from "react";

import Header from "../../components/Header";
import TokenInput from "../../components/TokenInput";
import InterchangeButton from "../../components/InterchangeButton";
import MainButton from "../../components/MainButton";
import styles from "./styles.module.css";

const Swap = () => {
  return (
    <div className={styles.swapContainer}>
      <Header />
      <TokenInput />
      <InterchangeButton />
      <TokenInput />
      <MainButton />
    </div>
  );
};

export default Swap;
