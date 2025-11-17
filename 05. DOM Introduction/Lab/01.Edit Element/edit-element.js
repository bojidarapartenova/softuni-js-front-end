function editElement(htmlEl, stringMatch, replacer) {
    let originalText = htmlEl.textContent;
    let newText = originalText.replaceAll(stringMatch, replacer);

    htmlEl.textContent = newText;
}