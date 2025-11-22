function radioCrystals(arr) {
    const target = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let crystal = arr[i];
        console.log(`Processing chunk ${crystal} microns`);

        const operations = [
            {
                name: "Cut",
                process: x => x / 4,
                condition: x => x / 4 >= target
            },
            {
                name: "Lap",
                process: x => x * 0.8,
                condition: x => x * 0.8 >= target
            },
            {
                name: "Grind",
                process: x => x - 20,
                condition: x => x - 20 >= target
            },
            {
                name: "Etch",
                process: x => x - 2,
                condition: x => x - 2 >= target - 1
            }
        ];

        for (let op of operations) {
            let count = 0;

            while (op.condition(crystal)) {
                crystal = op.process(crystal);
                count++;
            }

            if (count > 0) {
                console.log(`${op.name} x${count}`);
                crystal = Math.floor(crystal);
                console.log("Transporting and washing");
            }
        }

        if (crystal === target - 1) {
            crystal += 1;
            console.log("X-ray x1");
        }

        console.log(`Finished crystal ${crystal} microns`);
    }
}

radioCrystals([1000, 4000, 8100]);
