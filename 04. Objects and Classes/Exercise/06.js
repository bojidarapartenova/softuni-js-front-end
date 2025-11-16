function wordsTracker(arr) {
    let targetWords = arr[0].split(' ');
    let counts = {};

    for (let word of targetWords) {
        counts[word] = 0;
    }

    for (let i = 1; i < arr.length; i++) {
        let word = arr[i];

        if (counts.hasOwnProperty(word)) {
            counts[word]++;
        }
    }

    let entities = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of entities) {
        console.log(`${key} - ${value}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);