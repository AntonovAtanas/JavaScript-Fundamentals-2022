import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { get } from '../api/api.js';

import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function searchView() {
    let view = html`
        <section id="search-cars">
            <h1>Filter by year</h1>
        
            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list" @click=${getResults}>Search</button>
            </div>
        
            <h2>Results:</h2>
            <div class="listings">
        
            </div>
        </section>
    `

    showNavigation()
    render(view, main);
}

async function getResults() {
    let search = document.getElementById('search-input').value;

    let data = await get(`data/cars?where=year%3D${search}`);

    results(data)
}

function results(data) {
    let container = document.querySelector('.listings')
    let view = html `
        ${data.length === 0 ? html`<p class="no-cars"> No results.</p>`
            : html`
        ${data.map(result => html`
        <div class="listing">
            <div class="preview">
                <img src=${result.imageUrl}>
            </div>
            <h2>${result.brand} ${result.model}</h2>
            <div class="info">
                <div class="data-info">
                    <h3>Year: ${result.year}</h3>
                    <h3>Price: ${result.price} $</h3>
                </div>
                <div class="data-buttons">
                    <a href=${`/details/${result._id}`} class="button-carDetails">Details</a>
                </div>
            </div>
        </div>
        `)}
        `
}`

render(view, container)

}