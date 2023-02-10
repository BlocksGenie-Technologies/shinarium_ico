import React from "react";
import styles from "./styles.module.css";

const Header = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ICO Token Sale</h1>
      <div>
        <button
          className={`${styles.iconButton} ${styles.iconExitHide}`}
        >
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
