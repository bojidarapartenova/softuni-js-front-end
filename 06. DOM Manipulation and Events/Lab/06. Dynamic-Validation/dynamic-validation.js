document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const emailElement = document.getElementById('email');
    emailElement.addEventListener('change', handleEmailChange);

    function handleEmailChange() {
        const email = emailElement.value.trim();

        const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

        if (!pattern.test(email)) {
            emailElement.classList.add('error');
        }
        else {
            emailElement.classList.remove('error');
        }
    }
}
