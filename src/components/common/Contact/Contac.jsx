import React from "react";
import { useTranslation } from "react-i18next";
import { contactData } from "../../../assets/data/contactData";
import styles from "./Contact.module.scss";

export const Contact = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <section id="Contact" className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <h2 className={styles.title}>{contactData.title[lang] || contactData.title.en}</h2>
                <p className={styles.description}>{contactData.description[lang] || contactData.description.en}</p>

                <div className={styles.contactDetails}>
                    {contactData.channels.map((channel, index) => (
                        <a
                            key={index}
                            href={channel.href}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.contactItem}
                        >
                            <img src={channel.icon} alt={channel.label[lang] || channel.label.en} className={styles.icon} />
                            <span>{channel.label[lang] || channel.label.en}</span>
                        </a>
                    ))}
                </div>

                <div className={styles.socialIcons}>
                    {contactData.social.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.socialLink}
                        >
                            <img src={social.icon} alt="social icon" className={styles.socialIcon} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
