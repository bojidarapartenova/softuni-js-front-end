function orders(product, quantity) {
    const coffeePrice = 1.50;
    const waterPrice = 1.00;
    const cokePrice = 1.40;
    const snacksPrice = 2.00;

    let price;

    if (product == 'coffee') {
        price = coffeePrice;
    }
    else if (product == 'water') {
        price = waterPrice;
    }
    else if (product == 'coke') {
        price = cokePrice;
    }
    else if (product == 'snacks') {
        price = snacksPrice;
    }

    console.log((price * quantity).toFixed(2));
}

orders('coffee', 2.00);