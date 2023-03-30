import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { post } from '../api/api.js';
import page from '../../node_modules/page/page.mjs'

import { showNavigation } from './navigation.js';
import { notificationError } from './notification.js';

let main = document.querySelector('main');

export function showCreate() {
    let view = html`
            <section id="create-meme">
                <form id="create-form" @submit=${onCreate}>
                    <div class="container">
                        <h1>Create Meme</h1>
                        <label for="title">Title</label>
                        <input id="title" type="text" placeholder="Enter Title" name="title">
                        <label for="description">Description</label>
                        <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                        <label for="imageUrl">Meme Image</label>
                        <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                        <input type="submit" class="registerbtn button" value="Create Meme">
                    </div>
                </form>
            </section>
    `
    showNavigation();
    render(view, main);
}

async function onCreate(e) {
    e.preventDefault();

    let { title, description, imageUrl } = Object.fromEntries(new FormData(e.currentTarget));

    if (title !== '' && description !== '' && imageUrl !== '') {
        await post('data/memes', { title, description, imageUrl });
        page.redirect('/all-memes')
    } else {
        notificationError('Please fill all fields')
    }
}