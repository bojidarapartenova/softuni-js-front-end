function inventory(arr) {
    let heroes = [];
    for (let line of arr) {
        let data = line.split(' / ')
        let hero = data[0];
        let level = Number(data[1]);
        let items = data[2];

        heroes.push({ hero, level, items });
    }

    heroes = heroes.sort((a, b) => a.level - b.level);

    for (let element of heroes) {
        console.log(`Hero: ${element.hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);