function censorWords(text, word) {
    let wordToReplace = '*'.repeat(word.length);

    while (text.includes(word)) {
        text = text.replace(word, wordToReplace);
    }

    console.log(text);

}

censorWords('A small sentence with some words', 'small');