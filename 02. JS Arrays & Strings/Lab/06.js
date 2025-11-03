function countStringOccurrences(text, word) {
    text = text.split(' ');
    let count = 0;

    for (let el of text) {
        if (el == word) {
            count++;
        }
    }

    console.log(count);

}

countStringOccurrences('This is a word and it also is a sentence', 'is');