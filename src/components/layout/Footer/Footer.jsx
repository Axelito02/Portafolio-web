import React from "react";
import LogoB from "../../../assets/Images/Logos/LogoBlanco.png"
import { useTranslation } from "react-i18next";
import styles from './footer.module.scss';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div>
                <a href="#Profile">
                    <img src={LogoB} alt="Logo principal" />
                </a>
            </div>

            <div>
                <p>
                    {t('footer.developedBy')}<br />
                    2025 |<a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">
                        {t('footer.github')}
                    </a>
                </p>
            </div>
        </footer>
    );
};
