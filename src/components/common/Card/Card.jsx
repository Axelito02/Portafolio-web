import React from 'react';
import { Button } from '../../export';
import { useTranslation } from 'react-i18next';
import styles from './Card.module.scss';
import { icons } from '../../../assets/data/icons';

export const Card = ({ project, onNext, onBack }) => {
    const { i18n } = useTranslation();

    // Accede directamente a las traducciones de description y role según el idioma
    const description = project.description[i18n.language] || project.description.en;  // Fallback al inglés si el idioma no está disponible
    const role = project.role[i18n.language] || project.role.en;  // Fallback al inglés si el idioma no está disponible

    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.buttonContainer}>
                    <img
                        src={icons.iconBack}
                        alt="Siguiente"
                        className={styles.navButton}
                        onClick={onBack}
                    />
                </div>
                <div className={styles.imageColumn}>
                    <img src={project.image} alt={project.name} className={styles.projectImage} />
                </div>

                <div className={styles.infoColumn}>
                    <div className={styles.tileProject}>
                        <h2>{project.name}</h2>
                    </div>
                    <div className={styles.descriptionProject}>
                        <p>{description}</p> {/* Usamos la traducción directa */}
                    </div>
                    <div className={styles.rolProject}>
                        <p><strong>{role}</strong></p> {/* Usamos la traducción directa */}
                    </div>

                    <div className={styles.actions}>
                        <Button label={i18n.language === 'es' ? 'Ver proyecto' : 'See project'} variant="seeProject" onClick={() => window.open(project.link, '_blank')} />
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <img
                        src={icons.iconNext}
                        alt="Siguiente"
                        className={styles.navButton}
                        onClick={onNext}
                    />
                </div>
            </div >
        </>
    );
};
