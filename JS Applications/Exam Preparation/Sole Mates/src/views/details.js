import { html, nothing, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';

import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

function detailsRender(data) {
    let view = html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
                <img src=${data.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p>Brand: <span id="details-brand">${data.brand}</span></p>
                <p>
                    Model: <span id="details-model">${data.model}</span>
                </p>
                <p>Release date: <span id="details-release">${data.release}</span></p>
                <p>Designer: <span id="details-designer">${data.designer}</span></p>
                <p>Value: <span id="details-value">${data.value}</span></p>
            </div>
            ${sessionStorage.userId === data._ownerId 
                ? html `
            <div id="action-buttons">
                <a href=${`/edit/${data._id}`} id="edit-btn">Edit</a>
                <a href=${`/delete/${data._id}`} id="delete-btn">Delete</a>
            </div>
            `
            :
            nothing
            }
        </div>
    </section>
    `;

    showNavigation();
    render(view, main);
}

export async function showDetails(ctx) {
    let id = ctx.params.id;
    let data = await get(`data/shoes/${id}`);
    detailsRender(data);
}