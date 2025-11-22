function pointsValidation(input) {
    const [x1, y1, x2, y2] = input;

    let dist1 = Math.sqrt(x1 * x1 + y1 * y1);
    let dist2 = Math.sqrt(x2 * x2 + y2 * y2);
    let dist3 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    let valid1 = Number.isInteger(dist1);
    let valid2 = Number.isInteger(dist2);
    let valid3 = Number.isInteger(dist3);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${valid1 ? "valid" : "invalid"}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${valid2 ? "valid" : "invalid"}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${valid3 ? "valid" : "invalid"}`);
}

pointsValidation([3, 0, 0, 4]);