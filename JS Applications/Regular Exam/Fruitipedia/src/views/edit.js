import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';
import { get, put } from '../api/api.js';
import page from '../../node_modules/page/page.mjs'

let main = document.querySelector('main');

let id;

function editRender(data) {
    let view = html`
    <section id="edit">
        <div class="form">
            <h2>Edit Fruit</h2>
            <form class="edit-form" @submit=${onEdit}>
                <input type="text" name="name" id="name" placeholder="Fruit Name" .value=${data.name} />
                <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" .value=${data.imageUrl} />
                <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                    cols="50">${data.description}</textarea>
                <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50">${data.nutrition}</textarea>
                <button type="submit">post</button>
            </form>
        </div>
    </section>
    `
    showNavigation();
    render(view, main);
}

export async function showEdit(ctx) {
    id = ctx.params.id;
    let data = await get(`data/fruits/${id}`);
    editRender(data);
}

async function onEdit(e){
    e.preventDefault()

    let {name, imageUrl, description, nutrition} = Object.fromEntries(new FormData(e.currentTarget));

    if(name !== '' && imageUrl !== '' && description !== '' && nutrition !== ''){
        await put(`data/fruits/${id}`, {name, imageUrl, description, nutrition});
        page.redirect(`/details/${id}`);
    }
}