function signCheck(numOne, numTwo, numThree) {
    let countNegative = 0;

    if (numOne < 0) {
        countNegative++;
    }

    if (numTwo < 0) {
        countNegative++;
    }

    if (numThree < 0) {
        countNegative++;
    }

    if (countNegative % 2 == 0) {
        console.log('Positive');
    }
    else {
        console.log('Negative');
    }
}

signCheck(5, 12, -15);