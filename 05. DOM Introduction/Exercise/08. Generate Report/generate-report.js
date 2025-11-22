function solve() {
    const table = document.querySelector('table');
    const output = document.querySelector('#output');

    const headers = Array.from(table.querySelectorAll('thead th'));

    const selectedColumns = headers.map((th, index) => {
        const checkbox = th.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
            return { index, name: checkbox.name };
        }
        return null;
    })
        .filter(col => col != null);

    const rows = Array.from(table.querySelectorAll('tbody tr'));

    const report = rows.map(row => {
        const cells = Array.from(row.querySelectorAll('td'));
        const obj = {};

        selectedColumns.forEach(col => {
            obj[col.name] = cells[col.index].textContent;
        });

        return obj;
    });

    output.value = JSON.stringify(report);
}