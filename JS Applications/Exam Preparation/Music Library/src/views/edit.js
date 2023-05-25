import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'

import { put, get } from '../api/api.js';
import { navigationView } from './navigation.js';

let main = document.querySelector('main');

let id;

function editRender(data) {
    let view = html`
        <section id="edit">
            <div class="form">
                <h2>Edit Album</h2>
                <form class="edit-form" @submit=${onEdit}>
                    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value=${data.singer} />
                    <input type="text" name="album" id="album-album" placeholder="Album" value=${data.album} />
                    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value=${data.imageUrl} />
                    <input type="text" name="release" id="album-release" placeholder="Release date" value=${data.release} />
                    <input type="text" name="label" id="album-label" placeholder="Label" value=${data.label} />
                    <input type="text" name="sales" id="album-sales" placeholder="Sales" value=${data.sales} />
        
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    `;

    navigationView()
    render(view, main)
};

async function onEdit(e) {
    e.preventDefault();

    let { singer, album, imageUrl, release, label, sales } = Object.fromEntries(new FormData(e.currentTarget));

    if (singer !== '' && album !== '' && imageUrl !== '' && release !== '' && label !== '' && sales !== '') {
        await put(`data/albums/${id}`, { singer, album, imageUrl, release, label, sales });
        page.redirect(`/details/${id}`);
    } else {
        alert('Please fill all fields');
    }
};

export async function editView(ctx) {
    id = ctx.params.id;
    let data = await get(`data/albums/${id}`)
    editRender(data);
}