import React from "react";
import useSwapActionsHandler from "../../hooks/useSwapActionsHandler";
import styles from "./styles.module.css";

const InterchangeButton = () => {
  const { interchangeInputAndOutput } = useSwapActionsHandler();
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={interchangeInputAndOutput}>
        ▼▲
      </button>
    </div>
  );
};

export default InterchangeButton;
