class CounterOfWords {
    /**
     * @param {HTMLInputElement} inputElement
     * @returns {number}
     */
    static getSpaces(text) {
        const spaces = text?.match(/\s/g);
        return Array.isArray(spaces) ? spaces.length : 0;
    }

    static getWords(text) {
        const words = text?.match(/\b[a-zA-Z]{1}[a-zA-Z]*\b/g);
        return Array.isArray(words) ? words.length : 0;
    }

    static getLetters(text) {
        const splittedText = text.split('');
        const letters = splittedText.filter((char) => {
            const regex = new RegExp(/[a-zA-Z]/g);
            return regex.test(char);
        });
        return letters.length;
    }  
}

const textArea = document.getElementById("tArea");
const result = document.querySelector('.result');
textArea.addEventListener('input', (e) => {
    const value = e.target.value;
    const words = CounterOfWords.getWords(value);
    const letters = CounterOfWords.getLetters(value);
    const spaces = CounterOfWords.getSpaces(value);
    result.textContent = `Espacios: ${spaces}; Letras: ${letters}; Palabras: ${words}`;
});