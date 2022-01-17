import React, { useState } from "react";
import LateralPanel from "../LateralPanel";
import styles from "./styles.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Swap</h1>
      <button
        className={styles.iconButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <i className="fas fa-cog"></i>
      </button>
      <LateralPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Header;
