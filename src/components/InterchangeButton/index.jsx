import React from "react";
import styles from "./styles.module.css";

const InterchangeButton = ({ onClick }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={onClick}>
        ▼▲
      </button>
    </div>
  );
};

export default InterchangeButton;
