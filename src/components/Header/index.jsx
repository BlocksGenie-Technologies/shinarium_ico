import React from "react";

import useLateralPanel from "../../hooks/useLateralPanel";
import styles from "./styles.module.css";

const Header = () => {
  const [openPanel] = useLateralPanel({
    title: "Settings",
    content: <div>Hello</div>
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Swap</h1>
      <button className={styles.iconButton} onClick={() => openPanel()}>
        <i className="fas fa-cog"></i>
      </button>
    </div>
  );
};

export default Header;
