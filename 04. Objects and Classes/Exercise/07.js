function oddOccurrences(str) {
    let words = str.split(' ');
    let counts = {};
    let order = [];

    for (let word of words) {
        let lower = word.toLowerCase();

        if (!counts.hasOwnProperty(lower)) {
            counts[lower] = 0;
            order.push(lower);
        }

        counts[lower]++;
    }

    let result = [];

    for (let word of order) {
        if (counts[word] % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');