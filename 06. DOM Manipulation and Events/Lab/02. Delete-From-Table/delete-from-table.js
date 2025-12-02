function deleteByEmail() {
    const emails = document.querySelectorAll('tr td:nth-child(2)');
    const input = document.querySelector('input[name="email"]');
    const resultEl = document.getElementById('result');

    const inputEmail = input.value.trim();

    let isFound = false;
    for (const email of emails) {
        if (email.textContent == inputEmail) {
            const parentEl = email.parentElement;
            parentEl.remove();

            resultEl.textContent = 'Deleted.';
            isFound = true;
        }
    }

    if (!isFound) {
        resultEl.textContent = 'Not found.';
    }
}
