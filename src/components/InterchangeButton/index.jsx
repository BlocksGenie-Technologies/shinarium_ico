import React from "react";
import styles from "./styles.module.css";

const InterchangeButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={(e) => e.preventDefault()}>
        ▼▲
      </button>
    </div>
  );
};

export default InterchangeButton;
