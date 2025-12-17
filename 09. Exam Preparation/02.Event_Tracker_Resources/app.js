window.addEventListener("load", solve);

function solve() {
    const eventEl = document.getElementById('event');
    const noteEl = document.getElementById('note');
    const dateEl = document.getElementById('date');

    const upcomingUl = document.getElementById('upcoming-list');
    const endedUl = document.getElementById('events-list');

    const saveBtn = document.getElementById('save');
    const deleteBtn = document.querySelector('.delete');

    saveBtn.addEventListener('click', onSave);
    deleteBtn.addEventListener('click', onDelete);

    function onSave(e) {
        e.preventDefault();

        const eventName = eventEl.value.trim();
        const note = noteEl.value.trim();
        const date = dateEl.value;

        if (!eventName || !note || !date) {
            return;
        }

        const li = createUpcomingItem(eventName, note, date);
        upcomingUl.appendChild(li);

        clearInputs();
    }

    function createUpcomingItem(eventName, note, date) {
        const li = document.createElement('li');
        li.className = 'event-item';

        const container = document.createElement('div');
        container.className = 'event-container';

        const article = document.createElement('article');
        article.innerHTML = `
            <p>Name: ${eventName}</p>
            <p>Note: ${note}</p>
            <p>Date: ${date}</p>
        `;

        const btnDiv = document.createElement('div');
        btnDiv.className = 'buttons';

        const editBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'Edit';

        const doneBtn = document.createElement('button');
        doneBtn.className = 'btn done';
        doneBtn.textContent = 'Done';

        btnDiv.append(editBtn, doneBtn);
        container.append(article, btnDiv);
        li.appendChild(container);

        editBtn.addEventListener('click', () => onEdit(li, eventName, note, date));
        doneBtn.addEventListener('click', () => onDone(li));

        return li;
    }

    function onEdit(li, eventName, note, date) {
        eventEl.value = eventName;
        noteEl.value = note;
        dateEl.value = date;

        li.remove();
    }

    function onDone(li) {
        const container = li.querySelector('.event-container');
        const article = container.querySelector('article');

        li.innerHTML = '';
        li.appendChild(article);

        endedUl.appendChild(li);
    }

    function onDelete() {
        endedUl.innerHTML = '';
    }

    function clearInputs() {
        eventEl.value = '';
        noteEl.value = '';
        dateEl.value = '';
    }
}