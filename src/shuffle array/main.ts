




const shuffleArray = <T>(arrayCartas: T[]): T[] => {
    // Crea una copia del array original para no modificarlo directamente
    const shuffledArray = arrayCartas.slice();

    // Recorre el array desde el último elemento hasta el segundo
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // Escoge un índice aleatorio entre 0 y i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));

        // Intercambia los elementos en las posiciones i y j
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

// Ejemplo de uso
const numbers = [1, 2, 3, 4, 5];
const shuffledNumbers = shuffleArray(numbers);
