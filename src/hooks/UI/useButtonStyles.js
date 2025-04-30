// Hook para manejar estilos según la variante
export const useButtonStyles = (variant) => {
    switch (variant) {

        case 'seeCV':
        case 'seeProject':
            return {
                backgroundColor: '#004C8B',
                color: '#FFFFFF',
                border: 'none',
                padding: '1rem',
                borderRadius: '5px',
                cursor: "pointer",
            };

        default:
            return {
                backgroundColor: '#e0e0e0',
                color: '#333',
                border: '1px solid #ccc',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: "pointer",
            };
    }
};
