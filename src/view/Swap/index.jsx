import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import Header from "../../components/Header";
import TokenInput from "../../components/TokenInput";
import InterchangeButton from "../../components/InterchangeButton";
import MainButton from "../../components/MainButton";
import LateralPanelProvider from "../../providers/LateralPanelProvider";
import AuthProvider from "../../providers/AuthProvider";
import styles from "./styles.module.css";

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

const Swap = () => {
  return (
    <div className={styles.swapContainer}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AuthProvider>
          <LateralPanelProvider>
            <Header />
            <TokenInput />
            <InterchangeButton />
            <TokenInput />
            <MainButton />
          </LateralPanelProvider>
        </AuthProvider>
      </Web3ReactProvider>
    </div>
  );
};

export default Swap;
