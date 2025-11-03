function gladiatorExpenses(lostFights, helmet, sword, shield, armor) {
    let expenses = 0;
    let count = 0;

    for (let i = 1; i <= lostFights; i++) {

        if (i % 2 == 0 && i % 3 == 0) {
            expenses += (helmet + sword + shield);
            count++;
        }
        else if (i % 2 == 0) {
            expenses += helmet;
        }

        else if (i % 3 == 0) {
            expenses += sword;
        }

        if (count == 2) {
            expenses += armor;
            count = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiatorExpenses(23, 12.50, 21.50, 40, 200);