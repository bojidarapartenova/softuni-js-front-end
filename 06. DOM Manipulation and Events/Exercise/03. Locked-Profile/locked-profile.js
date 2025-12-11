document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const profiles = document.querySelectorAll('.profile');

    for (const profile of profiles) {
        const button = profile.querySelector('button');
        const hiddenFields = profile.querySelector('.hidden-fields');
        const unlockRadio = profile.querySelector('input[type="radio"][id$="Unlock"]');

        hiddenFields.classList.remove('active');

        button.addEventListener('click', () => {
            if (unlockRadio.checked) {
                hiddenFields.classList.toggle('active');
                button.textContent = hiddenFields.classList.contains('active') ? 'Hide' : 'Show more';
            }
        });
    }
}