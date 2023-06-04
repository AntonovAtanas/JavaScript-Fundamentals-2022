import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';
import { get } from '../api/api.js';

let main = document.querySelector('main');

function dashboardRender(data) {
    let view = html`
    <h2>Fruits</h2>
    ${data.length === 0
    ? html`
    <!-- Display an h2 if there are no posts -->
    <h2>No fruit info yet.</h2>
    `
            : html`
    <section id="dashboard">
        ${data.map(fruit => html`
        <div class="fruit">
            <img src=${fruit.imageUrl} alt="example1" />
            <h3 class="title">${fruit.name}</h3>
            <p class="description">${fruit.description}</p>
            <a class="details-btn" href=${`/details/${fruit._id}`}>More Info</a>
        </div>
        `)}
    
    </section>
    `
        }
    `
    showNavigation();
    render(view, main);
}

export async function showDashboard() {
    let data = await get('data/fruits?sortBy=_createdOn%20desc');
    dashboardRender(data);
}