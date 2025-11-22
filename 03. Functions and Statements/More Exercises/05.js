function printDNA(n) {
    const sequence = "ATCGTTAGGG";
    let index = 0;

    for (let i = 0; i < n; i++) {
        const a = sequence[index % sequence.length];
        const b = sequence[(index + 1) % sequence.length];
        index += 2;

        if (i % 4 === 0) {
            console.log(`**${a}${b}**`);
        } else if (i % 4 === 1) {
            console.log(`*${a}--${b}*`);
        } else if (i % 4 === 2) {
            console.log(`${a}----${b}`);
        } else {
            console.log(`*${a}--${b}*`);
        }
    }
}

printDNA(10);