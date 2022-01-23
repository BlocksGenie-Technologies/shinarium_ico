import React from "react";
import styles from "./styles.module.css";

const InputField = ({ title }) => {
  return (
    <div className={styles.inputFieldContainer}>
      <div className={styles.labelContainer}>
        <label htmlFor={`${title.replaceAll(/\s/g, "-")}-input`}>{title}</label>
      </div>
      <div className={styles.inputContainer}>
        <input
          name={`${title.replaceAll(/\s/g, "-")}-input`}
          type="number"
          placeholder="0.5"
        />
      </div>
    </div>
  );
};

const Settings = () => {
  return (
    <div className={styles.container}>
      <InputField title="Slippage (%)" />
      <InputField title="Tx deadline (mins)" />
    </div>
  );
};

export default Settings;
