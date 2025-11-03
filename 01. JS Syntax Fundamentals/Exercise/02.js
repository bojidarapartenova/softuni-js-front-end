function vacation(count, type, day) {
    let price;

    switch (day) {
        case "Friday":
            if (type == "Students") {
                price = 8.45;
            }
            else if (type == "Business") {
                price = 10.90;
            }
            else if (type == "Regular") {
                price = 15;
            }
            break;

        case "Saturday":
            if (type == "Students") {
                price = 9.80;
            }
            else if (type == "Business") {
                price = 15.60;
            }
            else if (type == "Regular") {
                price = 20;
            }
            break;

        case "Sunday":
            if (type == "Students") {
                price = 10.46;
            }
            else if (type == "Business") {
                price = 16;
            }
            else if (type == "Regular") {
                price = 22.50;
            }
            break;
    }

    let result = price * count;

    if (type == "Students" && count >= 30) {
        result = result - result * 0.15;
    }

    if (type == "Business" && count >= 100) {
        count -= 10;
        result = price * count;
    }

    if (type == "Regular" && count >= 10 && count <= 20) {
        result = result - result * 0.05;
    }
    console.log(`Total price: ${result.toFixed(2)}`);

}

vacation(40, "Regular", "Saturday");