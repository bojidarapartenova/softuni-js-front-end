function palindromeIntegers(numbers) {
    for (let num of numbers) {
        let reversed = num.toString().split('').reverse().join('');

        if (num == reversed) {
            console.log('true');
        }
        else {
            console.log('false');
        }
    }
}

palindromeIntegers([12, 13, 44]);