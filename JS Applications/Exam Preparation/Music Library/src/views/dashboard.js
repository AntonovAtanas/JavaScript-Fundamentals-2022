import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';

import { navigationView } from './navigation.js';

let main = document.querySelector('main');

export function dashboardRender(data) {
    let view = html`
            <section id="dashboard">
                <h2>Albums</h2>
                <ul class="card-wrapper">
                    ${data.length === 0 
                    ? html`<h2>There are no albums added yet.</h2>`
                    : html`
                    ${data.map(music => html`
                    <li class="card">
                        <img src=${music.imageUrl} alt="travis" />
                        <p>
                            <strong>Singer/Band: </strong><span class="singer">${music.singer}</span>
                        </p>
                        <p>
                            <strong>Album name: </strong><span class="album">${music.album}</span>
                        </p>
                        <p><strong>Sales:</strong><span class="sales">${music.sales}</span></p>
                        <a class="details-btn" href=${`/details/${music._id}`}>Details</a>
                    </li>
                    `)}
                    `
                    }
                    
                </ul>
            </section>
    `;
    navigationView();
    render(view, main);
}

export async function dashboardView() {
    let data = await get('data/albums?sortBy=_createdOn%20desc');
    dashboardRender(data);
}