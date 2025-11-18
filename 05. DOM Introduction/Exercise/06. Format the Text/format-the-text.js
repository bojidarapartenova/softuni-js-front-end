function solve() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');

  output.innerHTML = "";

  let sentences = input
    .split('.')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  for (let i = 0; i < sentences.length; i += 3) {
    const chunk = sentences.slice(i, i + 3);
    const paragraphText = chunk.join('. ') + '.';

    const paragraph = `<p>${paragraphText}</p>`;
    output.innerHTML += paragraph;
  }
}