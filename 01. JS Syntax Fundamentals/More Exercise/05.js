function spiceMustFlow(startingYield) {
    let total = 0;
    let days = 0;
    let yield = startingYield;

    while (yield >= 100) {
        days++;
        total += yield;
        total -= 26;
        yield -= 10;
    }

    if (total >= 26) {
        total -= 26;
    }
    else {
        total = 0;
    }

    console.log(days);
    console.log(total);
}

spiceMustFlow(450);