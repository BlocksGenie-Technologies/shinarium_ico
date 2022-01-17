import React from "react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Swap</h1>
      <button className={styles.iconButton}>
        <i class="fas fa-cog"></i>
      </button>
    </div>
  );
};

export default Header;
