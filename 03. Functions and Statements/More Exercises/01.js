function carWash(input) {
    let result = 0;
    for (let command of input) {
        if (command == 'soap') {
            result += 10;
        }
        else if (command == 'water') {
            result += result * 0.2;
        }
        else if (command == 'vacuum cleaner') {
            result += result * 0.25;
        }
        else if (command == 'mud') {
            result = result - result * 0.1;
        }
    }

    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);