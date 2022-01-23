import { useWeb3React } from "@web3-react/core";
import React from "react";

import useAuth from "../../hooks/useAuth";
import styles from "./styles.module.css";

const MainButton = () => {
  const { login } = useAuth();
  const { account } = useWeb3React();

  return (
    <button className={styles.mainButton} onClick={login}>
      {account ? "Swap" : "Connect wallet"}
    </button>
  );
};

export default MainButton;
