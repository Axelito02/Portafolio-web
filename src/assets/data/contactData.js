import { icons } from "./icons"; // Ruta correcta

export const contactData = {
    title: {
        es: "Contacto",
        en: "Contact"
    },
    description: {
        es: "Puedes escribirme directamente por correo o WhatsApp. También puedes ver más de mi trabajo o conectar en redes.",
        en: "You can write to me directly by email or WhatsApp. You can also see more of my work or connect through social media."
    },
    channels: [
        {
            icon: icons.iconWhatsapp,
            label: {
                es: "+57 3023397634",
                en: "+57 3023397634"
            },
            href: "https://wa.me/573023397634?text=%C2%A1Hola%20Alex!%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20contigo."
        },
        {
            icon: icons.iconGmail,
            label: {
                es: "alexvenegas183@gmail.com",
                en: "alexvenegas183@gmail.com"
            },
            href: "mailto:alexvenegas183@gmail.com"
        }
    ],
    social: [
        {
            icon: icons.iconLinkedin,
            href: "https://www.linkedin.com/in/alexander-rueda-venegas-72878124a/"
        },
        {
            icon: icons.iconBehance,
            href: "https://www.behance.net/alexanderruedav"
        },
        {
            icon: icons.iconGithub,
            href: "https://github.com/Axelito02"
        }
    ]
};
