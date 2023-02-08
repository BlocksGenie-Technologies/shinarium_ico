import { useWeb3React } from "@web3-react/core";
import React from "react";

import useAuth from "../../hooks/useAuth";
import styles from "./styles.module.css";

const MainButton = () => {
  const { login } = useAuth();
  const { account } = useWeb3React();
  console.log(account);

  return (
    <button className={styles.mainButton} onClick={login}>
      {account ? "Buy Token" : "Connect wallet"}
    </button>
  );
};

export default MainButton;
