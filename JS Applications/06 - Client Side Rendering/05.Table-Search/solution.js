import { html, render } from '../node_modules/lit-html/lit-html.js';

document.querySelector('#searchBtn').addEventListener('click', onClick);
let searchField = document.getElementById('searchField');

let tBody = document.querySelector('tbody');

let info = (getData) => html`
   ${getData.map(person =>
   html`
   <tr>
      <td>${person.firstName} ${person.lastName}</td>
      <td>${person.email}</td>
      <td>${person.course}</td>
   </tr>`
)}
`

function onClick() {
   let everyTableData = Array.from(document.querySelectorAll('tbody td'));

   for (const iterator of everyTableData) {
         iterator.parentElement.className = ''; 
   }
   
   for (const iterator of everyTableData) {
      if (iterator.textContent.toLowerCase().includes(searchField.value.toLowerCase())){
         iterator.parentElement.classList.add('select'); 
      }
   }

   searchField.value = '';
}

async function getData() {
   let response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   let data = await response.json();

   return Object.values(data);
}

render(info(await getData()), tBody)