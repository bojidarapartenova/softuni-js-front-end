function solve() {
   const input = document.getElementById('searchField');
   const searchText = input.value.toLowerCase();
   const dataList = Array.from(document.querySelectorAll('tbody tr'));

   dataList.forEach(d => {
      d.classList.remove('select');
      d.style.backgroundColor = '';
   });

   if (searchText !== '') {
      dataList.forEach(d => {
         if (d.textContent.toLowerCase().includes(searchText)) {
            d.classList.add('select');
         }
      });
   }

   input.value = '';
}
