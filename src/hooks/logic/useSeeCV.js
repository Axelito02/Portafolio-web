import { useTranslation } from 'react-i18next';

export const useOpenCV = () => {
    const { i18n } = useTranslation();  // Usar i18next para obtener el idioma actual

    const openCV = () => {
        // Obtener el idioma actual
        const language = i18n.language;

        // Determinar la ruta del archivo según el idioma
        let filePath;
        if (language === 'es') {
            filePath = 'https://drive.google.com/file/d/1H8in3BkIKU63A6i3NM7JuTDLjW96hA-S/view?usp=drive_link'; // Archivo en español
        } else {
            filePath = 'https://drive.google.com/file/d/1Ar1VpiDi8CcvxXuojhdSYx27kon8txDB/view?usp=drive_link'; // Archivo en inglés
        }

        const link = document.createElement('a');
        link.href = filePath;
        link.target = '_blank';
        link.click();
    };

    return { openCV };
};
