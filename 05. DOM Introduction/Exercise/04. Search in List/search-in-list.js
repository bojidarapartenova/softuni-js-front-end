function solve() {
   const searchText = document.getElementById('searchText').value.toLowerCase();
   const townsList = Array.from(document.querySelectorAll('#towns li'));
   const result = document.getElementById('result');

   townsList.forEach(town => {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
   });

   searchText.textContent = '';
   result.textContent = '';

   let matches = 0;
   townsList.forEach(town => {
      if (town.textContent.toLowerCase().includes(searchText) && searchText != '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   });

   result.textContent = `${matches} matches found`;
}