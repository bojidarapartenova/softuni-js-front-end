function login(guesses) {
    let username = guesses[0];
    let password = username.split('').reverse().join('');

    let countGuesses = 0;

    for (let i = 1; i < guesses.length; i++) {
        if (guesses[i] == password) {
            console.log(`User ${username} logged in.`);
            break;
        }
        else {
            countGuesses++;

            if (countGuesses == 4) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);