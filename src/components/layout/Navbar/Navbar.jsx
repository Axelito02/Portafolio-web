import React, { useState, useEffect } from "react";
import LogoB from "../../../assets/Images/Logos/LogoBlanco.png"
import { useTranslation } from "react-i18next";
import styles from './navbar.module.scss';

export const NavBar = () => {
    const { t, i18n } = useTranslation(); // Usa el hook useTranslation
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Obtener el idioma actual
    const currentLanguage = i18n.language;

    return (
        <nav
            aria-label="Menú principal"
            className={`${styles.navBar} ${scrolled ? styles.scrolled : ''}`}
        >
            <div>
                <a href="#Profile">
                    <img src={LogoB} alt="Logo principal" />
                </a>
            </div>
            <ul>
                <li><a href="#Profile">{t('navbar.home')}</a></li>
                <li><a href="#Skills">{t('navbar.about')}</a></li>
                <li><a href="#Projects">{t('navbar.projects')}</a></li>
                <li><a href="#Contact">{t('navbar.contact')}</a></li>

                {/* Solo muestra el botón "EN" si el idioma actual no es inglés */}
                {currentLanguage !== 'en' && (
                    <button className={styles.BtnLenguaje} onClick={() => i18n.changeLanguage('en')}>EN</button>
                )}

                {/* Solo muestra el botón "ES" si el idioma actual no es español */}
                {currentLanguage !== 'es' && (
                    <button className={styles.BtnLenguaje} onClick={() => i18n.changeLanguage('es')}>ES</button>
                )}
            </ul>
        </nav>
    );
};
