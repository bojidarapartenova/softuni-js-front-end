function numberModification(number) {
    let average = 0;
    let sum = 0;
    let count = 0;

    let temp = number;
    while (temp != 0) {
        let digit = temp % 10;
        sum += digit;
        count++;

        temp = Math.trunc(temp / 10);
    }

    average = sum / count;

    while (average <= 5) {
        number = number * 10 + 9;

        sum += 9;
        count++;
        average = sum / count;
    }

    console.log(number);
}

numberModification(101);