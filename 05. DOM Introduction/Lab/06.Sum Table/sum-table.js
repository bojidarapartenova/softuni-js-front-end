function sumTable() {
    const prices = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));
    const sumEl = prices.pop();

    let sum = 0;

    for (let price of prices) {
        const pr = Number(price.textContent);
        sum += pr;
    }

    sumEl.textContent = sum;
}