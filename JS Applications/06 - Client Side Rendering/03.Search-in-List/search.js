import { towns } from "./towns.js";
import { html, render } from '../node_modules/lit-html/lit-html.js';

let divTowns = document.getElementById('towns');
let searchTerm = document.getElementById('searchText');

document.querySelector('button').addEventListener('click', found)

let ul = () => html`
<ul>
   ${towns.map(town => html`<li>${town}</li>`)}
</ul>
`

render(ul(), divTowns);

function found(){
   let allTowns = Array.from(document.querySelectorAll('li'));
   let res = document.getElementById('result')

   let counter = 0;

   allTowns.forEach(town => {
      if (town.textContent.includes(searchTerm.value)){
         town.classList.add('active');
         counter++
      } else {
         town.classList.remove('active');
      }
   });
   
   res.textContent = `${counter} matches found`
}