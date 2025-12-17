const BASE_URL = 'http://localhost:3030/jsonstore/orders';

const nameInput = document.getElementById('name');
const quantityInput = document.getElementById('quantity');
const dateInput = document.getElementById('date');
const orderBtn = document.getElementById('order-btn');
const editOrderBtn = document.getElementById('edit-order');
const loadOrdersBtn = document.getElementById('load-orders');
const listDiv = document.getElementById('list');

let currentEditId = null;

loadOrdersBtn.addEventListener('click', loadAllOrders);
orderBtn.addEventListener('click', createOrder);
editOrderBtn.addEventListener('click', updateOrder);

async function loadAllOrders() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        listDiv.innerHTML = '';

        Object.values(data).forEach(order => {
            displayOrder(order);
        });
    } catch (error) {
        console.error('Error loading orders:', error);
    }
}

function displayOrder(order) {
    const container = document.createElement('div');
    container.className = 'container';
    container.dataset.id = order._id;

    const nameH2 = document.createElement('h2');
    nameH2.textContent = order.name;

    const dateH3 = document.createElement('h3');
    dateH3.textContent = order.date;

    const quantityH3 = document.createElement('h3');
    quantityH3.textContent = order.quantity;

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change';
    changeBtn.addEventListener('click', () => changeOrder(order));

    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-btn';
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', () => deleteOrder(order._id));

    container.appendChild(nameH2);
    container.appendChild(dateH3);
    container.appendChild(quantityH3);
    container.appendChild(changeBtn);
    container.appendChild(doneBtn);

    listDiv.appendChild(container);
}

async function createOrder(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const quantity = quantityInput.value.trim();
    const date = dateInput.value.trim();

    if (!name || !quantity || !date) {
        return;
    }

    const order = {
        name,
        quantity,
        date
    };

    try {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });

        clearInputs();
        await loadAllOrders();
    } catch (error) {
        console.error('Error creating order:', error);
    }
}

function changeOrder(order) {
    nameInput.value = order.name;
    quantityInput.value = order.quantity;
    dateInput.value = order.date;

    currentEditId = order._id;

    orderBtn.disabled = true;
    editOrderBtn.disabled = false;

    const container = document.querySelector(`[data-id="${order._id}"]`);
    if (container) {
        container.remove();
    }
}

async function updateOrder(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const quantity = quantityInput.value.trim();
    const date = dateInput.value.trim();

    if (!name || !quantity || !date || !currentEditId) {
        return;
    }

    const order = {
        name,
        quantity,
        date,
        _id: currentEditId
    };

    try {
        await fetch(`${BASE_URL}/${currentEditId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });

        clearInputs();
        currentEditId = null;
        orderBtn.disabled = false;
        editOrderBtn.disabled = true;

        await loadAllOrders();
    } catch (error) {
        console.error('Error updating order:', error);
    }
}

async function deleteOrder(id) {
    try {
        await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        });

        await loadAllOrders();
    } catch (error) {
        console.error('Error deleting order:', error);
    }
}

function clearInputs() {
    nameInput.value = '';
    quantityInput.value = '';
    dateInput.value = '';
}