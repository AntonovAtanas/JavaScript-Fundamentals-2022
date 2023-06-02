import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function showSearch() {

    let view = html`
    <section id="search">
        <h2>Search by Brand</h2>
    
        <form class="search-wrapper cf" @submit=${getResult}>
            <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
            <button type="submit">Search</button>
        </form>
    
        <h3>Results:</h3>

    </section>
    `
    showNavigation
    render(view, main)
}

async function getResult(e) {
    e.preventDefault();

    let { search } = Object.fromEntries(new FormData(e.currentTarget));

    if (search !== '') {
        let data = await get(`data/shoes?where=brand%20LIKE%20%22${search}%22`);
        showResult(data);
    }

}

function showResult(data) {

    let searchSection = document.getElementById('search');

    let view = html` 
    ${data.length === 0 ? html`<h2>There are no results found.</h2>`
    :
    html`
    ${data.map(result => html `
    <div id="search-container">
        <ul class="card-wrapper">
            
            <li class="card">
                <img src=${result.imageUrl} alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">${result.brand}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${result.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${result.value}</span>$</p>
                ${sessionStorage.userId ? html `<a class="details-btn" href=${`/details/${result._id}`}>Details</a>` : nothing}
            </li>
        </ul>
    </div>
    `)}
    `
    }
    `

    render(view, searchSection);
}