function listOfNames(names) {
    names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);

    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);