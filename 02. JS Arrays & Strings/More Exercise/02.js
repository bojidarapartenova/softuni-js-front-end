function bitcoinMining(shift) {
    const bitcoin = 11949.16;
    const gold = 67.51;

    let money = 0;
    let days = [];
    let bitcoins = 0;

    for (let i = 0; i < shift.length; i++) {
        if ((i + 1) % 3 == 0) {
            shift[i] -= shift[i] * 0.3;
        }

        money += shift[i] * gold;

        while (money >= bitcoin) {
            money -= bitcoin;
            bitcoins++;
            days.push(i + 1);
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (days.length > 0) {
        console.log(`Day of the first purchased bitcoin: ${days[0]}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);