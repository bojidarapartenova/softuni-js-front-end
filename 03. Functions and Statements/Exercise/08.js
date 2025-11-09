function perfectNumber(num) {
    let divisitors = [];

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            divisitors.push(i);
        }
    }

    let sum = 0;
    for (const divisitor of divisitors) {
        sum += divisitor;
    }

    if (sum == num) {
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(1236498);