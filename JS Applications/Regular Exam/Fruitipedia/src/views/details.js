import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';
import { get } from '../api/api.js';

let main = document.querySelector('main');

function fruitRender(data) {
    let view = html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-title">${data.name}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p>${data.description}</p>
                    <p id="nutrition">Nutrition</p>
                    <p id="details-nutrition">${data.nutrition}</p>
                </div>
                <!--Edit and Delete are only for creator-->
                ${sessionStorage.userId === data._ownerId ? html `
                <div id="action-buttons">
                    <a href=${`/edit/${data._id}`} id="edit-btn">Edit</a>
                    <a href=${`/delete/${data._id}`} id="delete-btn">Delete</a>
                </div>
                `
                : nothing}

            </div>
        </div>
    </section>
    `
    showNavigation();
    render(view, main);
}

export async function showDetails(ctx) {
    let id = ctx.params.id;
    let data = await get(`data/fruits/${id}`);
    fruitRender(data);
}