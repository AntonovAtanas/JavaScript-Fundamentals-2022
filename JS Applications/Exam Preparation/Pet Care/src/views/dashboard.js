import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { showNavigation } from './navigation.js';
import { get } from '../api/api.js';

let main = document.querySelector('main');

function dashboardRender(data) {
    let view = html`
    <section id="dashboard">
        <h2 class="dashboard-title">Services for every animal</h2>
        <div class="animals-dashboard">
        ${data.length === 0 ? html`
        <div>
            <p class="no-pets">No pets in dashboard</p>
        </div>
        `
            : html`
        
            ${data.map(pet => html`
    
            <div class="animals-board">
                <article class="service-img">
                    <img class="animal-image-cover" src="${pet.image}" />
                </article>
                <h2 class="name">${pet.name}</h2>
                <h3 class="breed">${pet.breed}</h3>
                <div class="action">
                    <a class="btn" href="/details/${pet._id}">Details</a>
                </div>
            </div>
    
            `)}
        
        `}
        </div>
    </section>
    `

    showNavigation();
    render(view, main);
}

export async function showDashboard() {
    let data = await get('data/pets?sortBy=_createdOn%20desc&distinct=name');
    dashboardRender(data);
}