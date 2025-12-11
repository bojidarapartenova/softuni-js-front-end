document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const submitBtn = document.querySelector('input[type="submit"]');
   const contentDivEl = document.getElementById('content');

   submitBtn.addEventListener('click', handleSubmit);

   function handleSubmit(e) {
      e.preventDefault();

      let inputValue = document.querySelector('input[type="text"]').value;
      let inputValues = inputValue.split(', ');

      for (const element of inputValues) {
         let sectionEl = document.createElement('div');

         let pEl = document.createElement('p');
         pEl.textContent = element;
         pEl.style.display = 'none';

         sectionEl.appendChild(pEl);
         contentDivEl.appendChild(sectionEl);

         sectionEl.addEventListener('click', () => {
            pEl.style.display = pEl.style.display == 'none' ? 'block' : 'none'
         });
      }
   }
}