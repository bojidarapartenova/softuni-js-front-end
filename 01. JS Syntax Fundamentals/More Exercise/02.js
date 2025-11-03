function wordsUppercase(input) {
    let words = input.match(/\w+/g);
    console.log(words.map(word => word.toUpperCase()).join(', '));

}

wordsUppercase('Hi, how are you?');