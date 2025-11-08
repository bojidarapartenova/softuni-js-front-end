function simpleCalculator(numOne, numTwo, operator) {
    const operations = {
        multiply: (numOne, numTwo) => numOne * numTwo,
        divide: (numOne, numTwo) => numOne / numTwo,
        add: (numOne, numTwo) => numOne + numTwo,
        subtract: (numOne, numTwo) => numOne - numTwo
    };

    console.log(operations[operator](numOne, numTwo));
};

simpleCalculator(5, 5, 'add');