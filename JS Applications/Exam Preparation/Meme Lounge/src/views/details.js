import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import { get, del } from '../api/api.js';
import page from '../../node_modules/page/page.mjs'

import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

let id;

function detailsRender(data) {
    let view = html`
        <section id="meme-details">
            <h1>Meme Title: ${data.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${data.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${data.description}</p>
                    ${sessionStorage.userId === data._ownerId
                    ? html `
                    <a class="button warning" href=${`/edit/${id}`}>Edit</a>
                    <button class="button danger" @click=${onDelete}>Delete</button>
                    `
                    : nothing
                    }
                </div>
            </div>
        </section>
    `
    showNavigation();
    render(view, main);
}

export async function showDetails(ctx) {
    id = ctx.params.id;

    let data = await get(`data/memes/${id}`);
    detailsRender(data)
}

async function onDelete(){
    del(`data/memes/${id}`);
    page.redirect('/all-memes');
}