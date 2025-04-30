import React from "react";
import styles from './Tooltip.module.scss';

export const Tooltip = ({ triggerText, popupText }) => {
    return (
        <div className={styles.popup}>
            {triggerText}
            <span className={styles.popuptext}>{popupText}</span>
        </div>
    );
};
