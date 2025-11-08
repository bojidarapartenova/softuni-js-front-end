function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;

    while (num != 0) {
        let digit = num % 10;

        if (digit % 2 == 0) {
            evenSum += digit;
        }
        else {
            oddSum += digit;
        }

        num = Math.trunc(num / 10);
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);