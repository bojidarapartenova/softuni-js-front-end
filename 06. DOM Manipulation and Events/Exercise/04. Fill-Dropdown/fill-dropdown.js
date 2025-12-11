document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const dropdown = document.getElementById('menu');
    const addBtn = document.querySelector('input[type="submit"]');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const newOption = document.createElement('option');
        newOption.text = document.getElementById('newItemText').value;
        newOption.value = document.getElementById('newItemValue').value;

        dropdown.appendChild(newOption);

        document.getElementById('newItemText').value = "";
        document.getElementById('newItemValue').value = "";

    });
}