function addItem() {
    const listEl = document.getElementById('items');
    const inputEl = document.getElementById('newItemText');
    const text = inputEl.value.trim();

    const newItem = document.createElement('li');
    newItem.textContent = text;

    listEl.appendChild(newItem);
    inputEl.value = '';
}
