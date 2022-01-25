import React from "react";
import { useWeb3React } from "@web3-react/core";

import useAuth from "../../hooks/useAuth";
import useLateralPanel from "../../hooks/useLateralPanel";
import Settings from "../Settings";
import styles from "./styles.module.css";

const Header = () => {
  const { logout } = useAuth();
  const { account } = useWeb3React();

  const [openPanel] = useLateralPanel({
    title: "Settings",
    content: <Settings />
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Swap</h1>
      <div>
        <button className={styles.iconButton} onClick={() => openPanel()}>
          <i className="fas fa-cog"></i>
        </button>
        <button
          className={`${styles.iconButton} ${!account && styles.iconExitHide}`}
          onClick={logout}
        >
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
