import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Si decides usar la carga asíncrona de los archivos de traducción

import en from '../src/locales/en/translation.json';
import es from '../src/locales/es/translation.json';

i18n
    .use(Backend) // Si usas backend para cargar las traducciones
    .use(initReactI18next) // Pasa i18n a react-i18next
    .init({
        lng: 'es', // Idioma por defecto
        fallbackLng: 'es', // Si no se encuentra la traducción, se usa el idioma por defecto
        resources: {
            en: { translation: en },
            es: { translation: es }
        },
        interpolation: {
            escapeValue: false // No se necesita escapar caracteres HTML
        }
    });

export default i18n;
