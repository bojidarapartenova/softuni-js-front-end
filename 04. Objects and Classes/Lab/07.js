function addressBook(arr) {
    let people = {};

    for (let personStr of arr) {
        let [person, address] = personStr.split(':');

        people[person] = address;
    }

    let entries = Object.entries(people).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);