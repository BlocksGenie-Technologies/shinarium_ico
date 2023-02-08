import React from "react";
import { useWeb3React } from "@web3-react/core";

import useAuth from "../../hooks/useAuth";
import styles from "./styles.module.css";

const Header = () => {
  const { logout } = useAuth();
  const { account } = useWeb3React();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ICO Token Sale</h1>
      <div>
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
