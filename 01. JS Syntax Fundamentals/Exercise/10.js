function sameNumbers(num) {
    let temp = num;
    let areEqual = true;

    let prevDigit = temp % 10;
    temp = Math.trunc(temp / 10);

    while (temp != 0) {
        let currentDigit = temp % 10;

        if (currentDigit != prevDigit) {
            areEqual = false;
        }

        temp = Math.trunc(temp / 10);
        prevDigit = currentDigit;
    }
    console.log(areEqual);

    let sum = 0;

    while (num != 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.trunc(num / 10);
    }

    console.log(sum);
}

sameNumbers(1234);