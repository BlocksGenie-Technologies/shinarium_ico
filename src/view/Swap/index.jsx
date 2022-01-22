import React from "react";

import Header from "../../components/Header";
import TokenInput from "../../components/TokenInput";
import InterchangeButton from "../../components/InterchangeButton";
import MainButton from "../../components/MainButton";
import styles from "./styles.module.css";
import LateralPanelProvider from "../../providers/LateralPanelProvider";

const Swap = () => {
  return (
    <div className={styles.swapContainer}>
      <LateralPanelProvider>
        <Header />
        <TokenInput />
        <InterchangeButton />
        <TokenInput />
        <MainButton />
      </LateralPanelProvider>
    </div>
  );
};

export default Swap;
