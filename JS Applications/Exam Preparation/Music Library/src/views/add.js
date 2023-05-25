import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'

import { post } from '../api/api.js';
import { navigationView } from './navigation.js';

let main = document.querySelector('main');

export function addView() {
    let view = html`
        <section id="create">
            <div class="form">
                <h2>Add Album</h2>
                <form class="create-form" @submit=${onAdd}>
                    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
                    <input type="text" name="album" id="album-album" placeholder="Album" />
                    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
                    <input type="text" name="release" id="album-release" placeholder="Release date" />
                    <input type="text" name="label" id="album-label" placeholder="Label" />
                    <input type="text" name="sales" id="album-sales" placeholder="Sales" />
        
                    <input type="submit" value="post">
                </form>
            </div>
        </section>
    `;

    navigationView()
    render(view, main)
};

async function onAdd(e) {
    e.preventDefault();

    let { singer, album, imageUrl, release, label, sales } = Object.fromEntries(new FormData(e.currentTarget));

    if (singer !== '' && album !== '' && imageUrl !== '' && release !== '' && label !== '' && sales !== '') {
        await post('data/albums', { singer, album, imageUrl, release, label, sales });
        page.redirect('/dashboard');
    } else {
        alert('Please fill all fields');
    }
}