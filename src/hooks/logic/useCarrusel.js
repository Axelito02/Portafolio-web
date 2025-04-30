import { useState } from 'react';

export const useCarrusel = (data) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const back = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const goToIndex = (index) => {
        if (index >= 0 && index < data.length) {
            setCurrentIndex(index);
        }
    };

    return {
        currentItem: data[currentIndex],
        currentIndex,
        totalItems: data.length,
        next,
        back,
        goToIndex
    };
};
