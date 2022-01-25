import React from "react";
import useSwapInputs from "../../hooks/useSwapInputs";
import styles from "./styles.module.css";

const InterchangeButton = () => {
  const { interchangeInputAndOutput } = useSwapInputs();
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={interchangeInputAndOutput}>
        ▼▲
      </button>
    </div>
  );
};

export default InterchangeButton;
