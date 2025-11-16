function makeADictionary(arr) {
    let dictionary = {};

    for (let el of arr) {
        let data = JSON.parse(el);
        let term = Object.keys(data)[0];
        let definition = data[term];

        dictionary[term] = definition;
    }

    let entries = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of entries) {
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);