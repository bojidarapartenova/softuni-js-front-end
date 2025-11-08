function djoserPyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let step = 0;
    let size = base;

    while (size > 2) {
        step++;
        let outer = size * size;
        let inner = (size - 2) * (size - 2);
        let stoneNeeded = inner * increment;
        let decorationNeeded = (outer - inner) * increment;

        stone += stoneNeeded;

        if (step % 5 === 0) {
            lapis += decorationNeeded;
        } else {
            marble += decorationNeeded;
        }

        size -= 2;
    }

    step++;
    gold += size * size * increment;

    const height = Math.floor(step * increment);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${height}`);
}

djoserPyramid(11, 1);