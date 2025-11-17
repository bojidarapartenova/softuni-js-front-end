function extractText() {
    let listElements = document.querySelectorAll('li');
    let textArea = document.querySelector('#result');

    for (let listElement of listElements) {
        let text = listElement.textContent;

        textArea.textContent += text + '\n';
    }
}