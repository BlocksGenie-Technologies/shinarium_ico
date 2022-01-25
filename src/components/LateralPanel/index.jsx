import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const LateralPanel = ({ isOpen, onClosePanel, title, children }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  const onAnimationEnd = () => {
    if (isClosing) {
      onClosePanel();
      setIsClosed(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      setIsClosed(false);
    } else if (!isClosed) {
      setIsClosing(true);
    }
  }, [isOpen]);

  return (
    <>
      {isClosed ? null : (
        <div className={styles.container} onClick={onClosePanel}>
          <div
            className={`${styles.panel} ${isClosing && styles.panelClose} ${
              styles.panelOpen
            }`}
            onClick={(e) => e.stopPropagation()}
            onAnimationEnd={onAnimationEnd}
          >
            <div className={styles.titleContainer}>
              <button className={styles.backButton} onClick={onClosePanel}>
                ←
              </button>
              <h2>{title}</h2>
            </div>
            <div className={styles.contentContainer}>{children}</div>
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
