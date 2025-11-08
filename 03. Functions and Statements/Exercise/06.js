function passwordValidator(password) {
    let isValid = true;
    let digits = 0;

    if (!(password.length >= 6 && password.length <= 10)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!/^[A-Za-z0-9]+$/.test(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 0 && password[i] <= 9) {
            digits++;
        }
    }

    if (digits < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

passwordValidator('logIn');