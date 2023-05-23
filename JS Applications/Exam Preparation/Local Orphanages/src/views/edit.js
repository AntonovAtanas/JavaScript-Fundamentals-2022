import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get, put } from '../api/api.js';
import { showNavigation } from './navigation.js';
import page from '../../node_modules/page/page.mjs'

let main = document.querySelector('main');

let id;

function editRender(data) {
    let view = html`
<section id="edit-page" class="auth">
    <form id="edit" @submit=${onEdit}>
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" value=${data.title}>
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" value=${data.description}>
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" value=${data.imageUrl}>
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" value=${data.address}>
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" value=${data.phone}>
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>
    `
    showNavigation();
    render(view, main);
}

export async function getEditItem(ctx) {
    id = ctx.params.id;
    let data = await get(`data/posts/${id}`);

    editRender(data);
}

async function onEdit(e){
    e.preventDefault();

    let { title, description, imageUrl, address, phone } = Object.fromEntries(new FormData(e.currentTarget));

    if (title !== '' && description !== '' && imageUrl !== '' && address !== '' && phone !== '') {
        await put(`data/posts/${id}`, { title, description, imageUrl, address, phone });
        page.redirect(`/details/${id}`)
    }
}