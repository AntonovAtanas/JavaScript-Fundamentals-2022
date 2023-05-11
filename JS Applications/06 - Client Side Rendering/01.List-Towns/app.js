import { html, render } from '../node_modules/lit-html/lit-html.js'

let inputField = document.getElementById('towns');
document.getElementById('btnLoadTowns').addEventListener('click', loadTowns);
let townsLi = document.getElementById('root');

let ul = (towns) => html
    `
    <ul> 
    ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
    `

function loadTowns(e) {
    e.preventDefault();
    let towns = inputField.value.split(', ');

    if (towns !== '') {
        render(ul(towns), townsLi)
    }
}