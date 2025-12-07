document.addEventListener('DOMContentLoaded', focused);

function focused() {
    const inputElements = document.querySelectorAll('input[type="text"]');

    for (const element of inputElements) {
        element.addEventListener('focus', addFocusedClass);
        element.addEventListener('blur', removeFocusedClass);
    }

    function addFocusedClass(e) {
        e.target.parentElement.classList.add('focused');
    }

    function removeFocusedClass(e) {
        e.target.parentElement.classList.remove('focused');
    }
}
