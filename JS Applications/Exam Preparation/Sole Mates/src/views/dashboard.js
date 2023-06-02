import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';

import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function dashboardRender(data) {
    let view = html`
<section id="dashboard">
    <h2>Collectibles</h2>
    ${data.length === 0 
    ? html `<h2>There are no items added yet.</h2>`
    : html`
    <ul class="card-wrapper">
    ${data.map(card => html `
    
        <li class="card">
            <img src=${card.imageUrl} alt="travis" />
            <p>
                <strong>Brand: </strong><span class="brand">${card.brand}</span>
            </p>
            <p>
                <strong>Model: </strong><span class="model">${card.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${card.value}</span>$</p>
            <a class= "details-btn" href=${`/details/${card._id}`}>Details</a>
        </li>
    
    `)}
    </ul>
    `
}
    `;

    showNavigation();
    render(view, main);
}

export async function showDashboard() {

    let data = await get('data/shoes?sortBy=_createdOn%20desc');
    dashboardRender(data);
}