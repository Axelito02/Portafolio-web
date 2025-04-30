import React from "react";
import styles from './Buttons.module.scss';
import { useButtonStyles, useOpenCV } from '../../../hooks/export';

export const Button = ({ label = "See CV", variant = 'default', onClick }) => {
    const style = useButtonStyles(variant);
    const { openCV } = useOpenCV();

    const handleClick = () => {
        if (variant === 'seeCV') {
            openCV();
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button onClick={handleClick} style={style} className={styles.Button}>
            {label}
        </button>
    );
};
