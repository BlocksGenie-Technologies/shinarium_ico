import React from "react";
import { useSwapActionsHandler } from "./../../store/swap/hooks";
import styles from "./styles.module.css";

const InterchangeButton = () => {
  const { switchInputAndOutput } = useSwapActionsHandler();
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={switchInputAndOutput}>
        ▼▲
      </button>
    </div>
  );
};

export default InterchangeButton;
