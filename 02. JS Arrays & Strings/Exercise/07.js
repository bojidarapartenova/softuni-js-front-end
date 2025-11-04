function stringSubstring(word, text) {
    let words = text.split(' ');

    let isFound = words.find(w => w.toLowerCase() == word.toLowerCase());

    if (isFound) {
        console.log(word);

    }
    else {
        console.log(`${word} not found!`);

    }
}

stringSubstring('python', 'JavaScript is the best programming language');