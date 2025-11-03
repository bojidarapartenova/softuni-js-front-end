function reverseAnArray(n, inputArr) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(inputArr[i]);
    }

    newArr.reverse();

    console.log(newArr.join(" "));

}

reverseAnArray(3, [10, 20, 30, 40, 50]);