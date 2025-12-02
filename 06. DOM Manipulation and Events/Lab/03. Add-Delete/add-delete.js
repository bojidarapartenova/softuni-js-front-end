function addItem() {
    const listEl = document.getElementById('items');
    const inputEl = document.getElementById('newItemText');
    const text = inputEl.value.trim();

    const newItem = document.createElement('li');
    newItem.textContent = text;

    const el = document.createElement('a');
    el.href = "#";
    el.textContent = '[Delete]';
    newItem.appendChild(el);

    listEl.appendChild(newItem);
    inputEl.value = '';

    el.addEventListener('click', deleteItem);

    function deleteItem(e) {
        e.target.parentElement.remove();
    }
}
