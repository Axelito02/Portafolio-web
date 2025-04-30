import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../export';
import { projects } from "../../../assets/export";
import { useCarrusel } from "../../../hooks/export";
import styles from './Carrusel.module.scss';

export const Carrusel = () => {
    const { t } = useTranslation();

    const {
        currentItem,
        currentIndex,
        totalItems,
        next,
        back,
        goToIndex
    } = useCarrusel(projects);

    return (
        <div id="Projects" className={styles.CarruselContainerCard}>
            {/* Título y descripción */}
            <div className={styles.CarruselHeader}>
                <h2 className={styles.CarruselTitle}>{t('projects.title')}</h2>
                <p className={styles.CarruselDescription}>
                    {t('projects.description')}
                </p>
            </div>

            {/* Tarjeta del carrusel */}
            <Card
                project={currentItem}
                onNext={next}
                onBack={back}
                currentIndex={currentIndex}
                totalProjects={totalItems}
                onDotClick={goToIndex}
            />

            {/* Indicadores */}
            <div className={styles.indicatorContainer}>
                {Array.from({ length: totalItems }).map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => goToIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};
