import React from "react";
import styles from "./styles.module.css";

const MainButton = () => {
  return (
    <button className={styles.mainButton} onClick={(e) => e.preventDefault()}>
      Connect wallet
    </button>
  );
};

export default MainButton;
