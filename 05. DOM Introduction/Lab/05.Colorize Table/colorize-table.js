function colorize() {
    let evenRows = document.querySelectorAll('tbody tr:nth-child(even)');

    for (let row of evenRows) {
        row.style.backgroundColor = 'teal';
    }
}