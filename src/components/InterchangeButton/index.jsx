import React from "react";
import useSwapInputs from "../../hooks/useSwapInputs";
import styles from "./styles.module.css";

const InterchangeButton = () => {
  const { swapInputAndOutput } = useSwapInputs();
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={swapInputAndOutput}>
        ▼▲
      </button>
    </div>
  );
};

export default InterchangeButton;
