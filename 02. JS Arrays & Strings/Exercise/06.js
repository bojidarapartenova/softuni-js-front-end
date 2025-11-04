function specialWords(text) {
    let words = text.split(' ');

    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let sub = word.substring(1);
            let isValid = true;

            for (let ch of sub) {
                if (!(/[A-Za-z]/).test(ch)) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                console.log(sub);
            }
        }
    }
}

specialWords('The symbol # is known #variously in English-speaking #regions as the #number sign');