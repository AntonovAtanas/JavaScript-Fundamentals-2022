import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get, put } from '../api/api.js';
import page from '../../node_modules/page/page.mjs'

import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

let id;

function showAdd(data) {
    let view = html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" value=${data.brand} />
            <input type="text" name="model" id="shoe-model" placeholder="Model" value=${data.model} />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" value=${data.imageUrl} />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" value=${data.release} />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" value=${data.designer} />
            <input type="text" name="value" id="shoe-value" placeholder="Value" value=${data.value} />

            <button type="submit">post</button>
        </form>
    </div>
</section>
    `;

    showNavigation();
    render(view, main);
}

async function onEdit(e) {
    e.preventDefault();

    let { brand, model, imageUrl, release, designer, value } = Object.fromEntries(new FormData(e.currentTarget));

    if (brand !== '' && model !== '' && imageUrl !== '' && release !== '' && designer !== '' && value !== '') {
        await put(`data/shoes/${id}`, { brand, model, imageUrl, release, designer, value });
        page.redirect('/dashboard')
    }
}

export async function editView(ctx) {
    id = ctx.params.id;

    let data = await get(`data/shoes/${id}`);
    showAdd(data);
}
