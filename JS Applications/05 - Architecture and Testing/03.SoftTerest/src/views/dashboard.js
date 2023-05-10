import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { showNavigation } from './navigation.js';
import { get } from '../api/api.js';

let main = document.querySelector('main');

export async function showDashboard() {

    let response = await get('data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');

    let dashboard = html`
    ${response.length == 0 
        ? html`
            <h1>No ideas yet! Be the first one :)</h1>
            `
    : html`
         <div id="dashboard-holder">
        ${response.map(idea => html `
        <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">${idea.title}</p>
            </div>
            <img class="card-image" src=${idea.img} alt="Card image cap">
            <a class="btn" href="/details/${idea._id}">Details</a> 
        </div>
        `)}
    </div>
    `
    }
    `

    showNavigation()
    render(dashboard, main);
}