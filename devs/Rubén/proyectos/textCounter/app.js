const checkWords = (ta) => {
    let target = ta.target;
    // let wordCounter = 0;
    let spacesCounter = 0;
    let letterArray = [];
    let wordArray = [];
    for (let i = 0; i < target.value.length; i++) {
        const targetValue = target.value[i];
        if (targetValue !== " ") {
            letterArray.push(targetValue);
        } else {
            wordArray.push(letterArray.join(""));
            letterArray = [];
            spacesCounter++;
            console.log(letterArray);
        }

    }
    for (let i = target.value.length - 1; i > 0; i--) {
        const targetValue = target.value[i];
        if (targetValue !== " ") {
            letterArray.push(targetValue);
        } else {
            letterArray.reverse();
            const word = letterArray.join("");
            wordArray.push(word);
            // console.log(wordArray);
            letterArray = [];
            break;
        }
    }
    console.log(wordArray);
    // console.log(spacesCounter);
    const results = {
        words: wordArray.length,
        spaces: spacesCounter,
        letters: target.value.length - spacesCounter,
    };
    // console.log(targetLetters);
    const result = document.querySelector(".result");
    result.innerHTML = `Letras: ${results.letters}; Palabras: ${results.words}; Espacios: ${results.spaces}`;
    return results;
}


const textArea = document.getElementById("tArea");
textArea.addEventListener('input', checkWords);
textArea.addEventListener('input', update);