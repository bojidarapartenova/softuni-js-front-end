document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const daysInput = document.getElementById('days-input');
    const hoursInput = document.getElementById('hours-input');
    const minutesInput = document.getElementById('minutes-input');
    const secondsInput = document.getElementById('seconds-input');

    document.getElementById('days').addEventListener('submit', (e) => {
        e.preventDefault();
        let days = Number(daysInput.value);

        hoursInput.value = (days * 24).toFixed(2);
        minutesInput.value = (days * 1440).toFixed(2);
        secondsInput.value = (days * 86400).toFixed(2);
    });

    document.getElementById('hours').addEventListener('submit', (e) => {
        e.preventDefault();
        let hours = Number(hoursInput.value);

        daysInput.value = (hours / 24).toFixed(2);
        minutesInput.value = (hours * 60).toFixed(2);
        secondsInput.value = (hours * 3600).toFixed(2);
    });

    document.getElementById('minutes').addEventListener('submit', (e) => {
        e.preventDefault();
        let minutes = Number(minutesInput.value);

        daysInput.value = (minutes / 1440).toFixed(2);
        hoursInput.value = (minutes / 60).toFixed(2);
        secondsInput.value = (minutes * 60).toFixed(2);
    });

    document.getElementById('seconds').addEventListener('submit', (e) => {
        e.preventDefault();
        let seconds = Number(secondsInput.value);

        daysInput.value = (seconds / 86400).toFixed(2);
        hoursInput.value = (seconds / 3600).toFixed(2);
        minutesInput.value = (seconds / 60).toFixed(2);
    });
}
