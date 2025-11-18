function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let divEl = document.getElementById('extra');

    if (button.textContent == "Less") {
        divEl.style.display = 'none';
        button.textContent = "More";
    }
    else {
        divEl.style.display = 'block';
        button.textContent = "Less";
    }
}