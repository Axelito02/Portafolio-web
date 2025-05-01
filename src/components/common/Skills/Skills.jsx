import React from 'react';
import styles from './Skills.module.scss';
import { icons } from '../../../assets/export';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
    const { t } = useTranslation();

    const skills = [
        {
            categoryKey: 'design',
            icon: 'iconDesign',
            tools: [
                { name: 'Figma', icon: 'iconFigma' },
            ],
        },
        {
            categoryKey: 'development',
            icon: 'iconDev',
            tools: [
                { name: 'HTML', icon: 'iconHTML' },
                { name: 'CSS', icon: 'iconCSS' },
                { name: 'JavaScript', icon: 'iconJS' },
                { name: 'React', icon: 'iconReact' },
            ],
        },
        {
            categoryKey: 'tools',
            icon: 'iconTools',
            tools: [
                { name: 'Github', icon: 'iconGithub' },
                { name: 'Notion', icon: 'iconNotion' },
            ],
        },
    ];

    return (
        <section id='Skills' className={styles.icons}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t('skills.title')}</h2>
                <p className={styles.description}>{t('skills.description')}</p>

                <div className={styles.columns}>
                    {skills.map((group, index) => (
                        <div key={index} className={styles.group}>
                            <h3 className={styles.groupTitle}>
                                <span className={`${styles.icon} ${styles[group.icon]}`} />
                                {t(`skills.categories.${group.categoryKey}`)}
                            </h3>
                            <ul className={styles.tools}>
                                {group.tools.map((tool, idx) => (
                                    <li key={idx} className={styles.tool}>
                                        <img
                                            src={icons[tool.icon]}
                                            alt={tool.name}
                                            className={styles.toolIcon}
                                        />
                                        <span>{tool.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
