function factorialDivision(num1, num2) {
    const fact = (n) => (n == 0 || n == 1 ? 1 : n * fact(n - 1));

    let fact1 = fact(num1);
    let fact2 = fact(num2);
    let result = fact1 / fact2;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2);