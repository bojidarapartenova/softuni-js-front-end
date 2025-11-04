function sortingNumbers(arr) {
    arr.sort((a, b) => a - b);
    let result = [];

    while (arr.length != 0) {
        let smallest = arr.shift();
        let largest = arr.pop();

        result.push(smallest);
        if (largest != undefined) {
            result.push(largest);
        }
    }

    return result;

}

console.log(
    sortingNumbers([1, 4, 5, 3]));