function solve() {
  let text = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let resultEl = document.getElementById('result');

  let result = '';
  let words = text.toLowerCase().split(' ');

  if (currentCase == "Camel Case") {
    result = words
      .map((w, i) => i == 0
        ? w
        : w.charAt(0).toUpperCase() + w.slice(1))
      .join('');
  }
  else if (currentCase == "Pascal Case") {
    result = words
      .map((w) =>
        w.charAt(0).toUpperCase() + w.slice(1))
      .join('');
  }
  else {
    result = "Error!";
  }

  resultEl.textContent = result;
}