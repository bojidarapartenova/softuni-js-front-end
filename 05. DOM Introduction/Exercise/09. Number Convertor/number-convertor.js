function solve() {
    const inputField = document.getElementById('input');
    const selectTo = document.getElementById('selectMenuTo');
    const resultField = document.getElementById('result');

    if (selectTo.options.length <= 1) {
        const binaryOption = document.createElement('option');
        binaryOption.value = 'binary';
        binaryOption.textContent = 'Binary';

        const hexadecimalOption = document.createElement('option');
        hexadecimalOption.value = 'hexadecimal';
        hexadecimalOption.textContent = 'Hexadecimal';

        selectTo.appendChild(binaryOption);
        selectTo.appendChild(hexadecimalOption);
    }

    const decimalValue = Number(inputField.value);

    const targetFormat = selectTo.value;

    let result = '';

    if (targetFormat == 'binary') {
        result = decimalValue.toString(2);
    }
    else if (targetFormat == 'hexadecimal') {
        result = decimalValue.toString(16).toUpperCase();
    }

    resultField.value = result;
}