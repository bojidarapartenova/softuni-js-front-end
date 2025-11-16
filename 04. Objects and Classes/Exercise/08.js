function piccolo(arr) {
    let parkingLot = new Set();

    for (let entry of arr) {
        let [direction, carNumber] = entry.split(', ');

        if (direction === "IN") {
            parkingLot.add(carNumber);
        } else {
            parkingLot.delete(carNumber);
        }
    }

    let sortedCars = Array.from(parkingLot).sort();

    if (sortedCars.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        sortedCars.forEach(car => console.log(car));
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);