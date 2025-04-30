import React from 'react';
import styles from './Profile.module.scss';
import foto from '../../../assets/Images/Profile/AlexRedondo.png';
import { Button } from '../Buttons/Buttons';
import { profileData } from '../../../assets/export';
import { useTranslation } from 'react-i18next';

export const Profile = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <section id='Profile' className={styles.profile}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img src={foto} alt={profileData.name[lang]} className={styles.image} />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.name}>{profileData.name[lang]}</h1>
                    <p className={styles.title}>{profileData.title[lang]}</p>
                    <p className={styles.description}>{profileData.description[lang]}</p>
                    <Button label={profileData.cvButton[lang]} variant='seeCV' />
                </div>
            </div>
        </section>
    );
};
