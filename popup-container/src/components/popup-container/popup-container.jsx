import React from "react";
import styles from "./popup-container.module.css";
import CloseIcon from "../../assets/icons/closeicon.svg";
export const PopupContainer = ({ open, setClose, children }) => {
  return (
    <div
      className={`${styles.popupContainer} ${
        open ? styles.open : styles.close
      }`}
    >
      <button
        onClick={() => setClose()}
        type="button"
        className={styles.closeButton}
      >
        <img src={CloseIcon} alt="" height="15px" width="15px" />
      </button>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
