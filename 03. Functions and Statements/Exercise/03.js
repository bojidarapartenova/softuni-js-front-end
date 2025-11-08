function charactersInRange(ch1, ch2) {
    let start = Math.min(ch1.charCodeAt(0), ch2.charCodeAt(0));
    let end = Math.max(ch1.charCodeAt(0), ch2.charCodeAt(0));

    let result = [];

    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));

}

charactersInRange('a', 'd');