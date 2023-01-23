function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = document.getElementsByTagName('tbody')[0].children;
      let searchTerm = document.getElementById('searchField').value;

      //clearing the result field in yellow
      const resultRows = document.querySelectorAll('.select');

      for (const box of resultRows) {
         box.classList.remove('select');
      }
      
      for (let i = 0; i < rows.length; i++) {
         let td = rows[i].getElementsByTagName('td');
         for (let name of td) {
            if (name.textContent.includes(searchTerm)) {
               rows[i].classList.add("select");
               break;
            }
         }
      }
      document.getElementById('searchField').value = '';
   }
}