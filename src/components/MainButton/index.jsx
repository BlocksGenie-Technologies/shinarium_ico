import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

import useAuth from "../../hooks/useAuth";
import styles from "./styles.module.css";

const MainButton = () => {
  const { login, logout } = useAuth();
  const { account } = useWeb3React();

  return (
    <button className={styles.mainButton} onClick={account ? logout : login}>
      {account || "Connect wallet"}
    </button>
  );
};

export default MainButton;
