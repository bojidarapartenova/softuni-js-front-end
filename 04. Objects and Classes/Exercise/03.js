function storeProvision(stock, orders) {
    output = {};

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);
        output[product] = quantity;
    }

    for (let i = 0; i < orders.length; i += 2) {
        let product = orders[i];
        let quantity = Number(orders[i + 1]);

        if (!output.hasOwnProperty(product)) {
            output[product] = 0;
        }

        output[product] += quantity;
    }

    let entries = Object.entries(output);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);