import { html, render } from '../node_modules/lit-html/lit-html.js'
import { cats } from "./catSeeder.js";

let catsSection = document.getElementById('allCats');

let ul = () => html`
<ul>
    ${cats.map(cats => html`
    <li>
        <img src=images/${cats.imageLocation}.jpg width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${showMore}>Show status code</button>
            <div class="status" style="display: none" id=${cats.statusCode}>
                <h4>Status Code: ${cats.statusCode}</h4>
                <p>${cats.statusMessage}</p>
            </div>
        </div>
    </li>
    `)}
</ul>
`

function showMore(event) {
    let catId = event.target.parentElement.children[1].id;

    let hiddenDiv = document.getElementById(`${catId}`);

    if (event.target.textContent == 'Show status code') {
        hiddenDiv.style.display = 'block';
        event.target.textContent = 'Hide status code';
    } else {
        hiddenDiv.style.display = 'none';
        event.target.textContent = 'Show status code';
    }
}

render(ul(), catsSection);