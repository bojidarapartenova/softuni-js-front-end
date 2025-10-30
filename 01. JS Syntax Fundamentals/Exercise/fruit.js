function fruit(type, weight, price) {
    let weightInKilograms = weight / 1000;

    console.log(`I need $${(weightInKilograms * price).toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${type}.`);

}

fruit('apple', 1563, 2.35);