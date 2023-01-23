function search() {
   let allTownsArr = Array.from(document.getElementsByTagName('li'));
   let searchTerm = document.getElementById('searchText').value;
   let counter = 0;

   for (let i = 0; i < allTownsArr.length; i++) {
      let town = allTownsArr[i].textContent;

      if (town.includes(searchTerm)) {
         allTownsArr[i].style.fontWeight = 'bold';
         allTownsArr[i].style.textDecoration = 'underline';
         counter++
      } else {
         allTownsArr[i].style.fontWeight = '';
         allTownsArr[i].style.textDecoration = '';
      }
   }

   document.getElementById('result').textContent = `${counter} matches found`
}
