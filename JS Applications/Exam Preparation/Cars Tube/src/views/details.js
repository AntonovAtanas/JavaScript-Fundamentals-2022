import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';
import { get } from '../api/api.js';

let main = document.querySelector('main');

function carView(data) {

    let view = html`
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src=${data.imageUrl}>
            <hr>
            <ul class="listing-props">
                <li><span>Brand:</span>${data.brand}</li>
                <li><span>Model:</span>${data.model}</li>
                <li><span>Year:</span>${data.year}</li>
                <li><span>Price:</span>${data.price}$</li>
            </ul>
    
            <p class="description-para">${data.description}</p>
            ${sessionStorage.userId === data._ownerId ? html `
            <div class="listings-buttons">
                <a href=${`/edit/${data._id}`} class="button-list">Edit</a>
                <a href=${`/delete/${data._id}`} class="button-list">Delete</a>
            </div>
            `
            :
            nothing}

        </div>
    </section>
    `;

    showNavigation()
    render(view, main);
}

export async function getCar(ctx) {
    let id = ctx.params.id
    let data = await get(`data/cars/${id}`);
    carView(data);
}