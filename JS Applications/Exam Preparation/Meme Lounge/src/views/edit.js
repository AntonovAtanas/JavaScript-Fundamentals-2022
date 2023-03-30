import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get, put } from '../api/api.js';
import page from '../../node_modules/page/page.mjs'

import { showNavigation } from './navigation.js';
import { notificationError } from './notification.js';

let main = document.querySelector('main');

let id;

function editRender(data) {
    let view = html`
                    <section id="edit-meme">
                        <form id="edit-form" @submit=${onEdit}>
                            <h1>Edit Meme</h1>
                            <div class="container">
                                <label for="title">Title</label>
                                <input id="title" type="text" placeholder="Enter Title" name="title" value=${data.title}>
                                <label for="description">Description</label>
                                <textarea id="description" placeholder="Enter Description" name="description">${data.description}</textarea>
                                <label for="imageUrl">Image Url</label>
                                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value=${data.imageUrl}>
                                <input type="submit" class="registerbtn button" value="Edit Meme">
                            </div>
                        </form>
                    </section>
    `
    showNavigation();
    render(view, main);
}

async function onEdit(e) {
    e.preventDefault()

    let { title, description, imageUrl } = Object.fromEntries(new FormData(e.currentTarget));

    if (title !== '' && description !== '' && imageUrl !== '') {
        await put(`data/memes/${id}`, { title, description, imageUrl });
        page.redirect(`/details/${id}`)
    } else {
        notificationError('Please fill all fields')
    }
}

export async function showEdit(ctx) {
    id = ctx.params.id;

    let data = await get(`data/memes/${id}`);
    editRender(data);
}