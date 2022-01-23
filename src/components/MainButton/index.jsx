import React from "react";

import useAuth from "../../hooks/useAuth";
import styles from "./styles.module.css";

const MainButton = () => {
  const { login } = useAuth();

  return (
    <button className={styles.mainButton} onClick={login}>
      Connect wallet
    </button>
  );
};

export default MainButton;
