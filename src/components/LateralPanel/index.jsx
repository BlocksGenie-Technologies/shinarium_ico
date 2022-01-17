import React, { useState } from "react";
import styles from "./styles.module.css";

const LateralPanel = ({ isOpen, onClose, title, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  const onAnimationEnd = () => {
    if (isClosing) {
      onClose();
      setIsClosing(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.container} onClick={handleClose}>
          <div
            className={`${styles.panel} ${isClosing && styles.panelClose} ${
              isOpen && styles.panelOpen
            }`}
            onClick={(e) => e.stopPropagation()}
            onAnimationEnd={onAnimationEnd}
          >
            <div className={styles.titleContainer}>
              <button className={styles.backButton} onClick={handleClose}>
                ←
              </button>
              <h2>{title}</h2>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

LateralPanel.defaultProps = {
  title: "Title"
};

export default LateralPanel;
