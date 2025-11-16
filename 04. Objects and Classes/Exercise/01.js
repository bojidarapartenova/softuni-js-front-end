function employees(arr) {
    let personalNumber;

    for (let person of arr) {
        personalNumber = person.length;

        console.log(`Name: ${person} -- Personal Number: ${personalNumber}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);