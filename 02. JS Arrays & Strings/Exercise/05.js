function revealWords(input, text) {
    let words = input.split(', ');
    let result = text.split(' ');

    for (let i = 0; i < result.length; i++) {
        if (result[i].includes('*')) {
            let wordLength = result[i].length;

            let wordToReplace = words.find(w => w.length == wordLength);

            if (wordToReplace) {
                result[i] = wordToReplace;
            }
        }
    }
    console.log(result.join(' '));

}

revealWords('great', 'softuni is ***** place for learning new programming languages');