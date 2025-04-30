import { useTranslation } from 'react-i18next';

export const useOpenCV = () => {
    const { i18n } = useTranslation();  // Usar i18next para obtener el idioma actual

    const openCV = () => {
        // Obtener el idioma actual
        const language = i18n.language;

        // Determinar la ruta del archivo según el idioma
        let filePath;
        if (language === 'es') {
            filePath = 'src/assets/Documents/HV-es.pdf'; // Archivo en español
        } else {
            filePath = 'src/assets/Documents/HV-en.pdf'; // Archivo en inglés
        }

        const link = document.createElement('a');
        link.href = filePath;
        link.target = '_blank';
        link.click();
    };

    return { openCV };
};
