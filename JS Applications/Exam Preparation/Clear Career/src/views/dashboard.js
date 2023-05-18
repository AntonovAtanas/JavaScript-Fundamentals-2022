import { html, render } from '../../node_modules/lit-html/lit-html.js';

import { navigationView } from './navigation.js';

import { get } from '../api/api.js';

let main = document.querySelector('main');

function dashboardGenerator(data) {

    let view = html`
    <section id="dashboard">
    <h2>Job Offers</h2>
        ${data.length == 0 
        ? html`
        <h2>No offers yet.</h2>
        `
        : html`
        ${data.map(offer => html`
            <div class="offer">
            <img src=${offer.imageUrl} alt="example1" />
            <p>
              <strong>Title: </strong><span class="title">${offer.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
            <a class="details-btn" href=${`/details/${offer._id}`}>Details</a>
          </div>
          `)} 
          `
    }
    </section>
    `

    navigationView();
    render(view, main);
}

export async function dashboardView(){
    let data = await get('data/offers?sortBy=_createdOn%20desc');
    dashboardGenerator(data);
}