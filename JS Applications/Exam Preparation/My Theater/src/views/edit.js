import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';
import { get, put } from '../api/api.js';
import page from '../../node_modules/page/page.mjs'

let main = document.querySelector('main');

let id;

function editRender(data) {
    let view = html`
            <section id="editPage">
            <form class="theater-form" @submit=${onEdit}>
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" value=${data.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" value=${data.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author"
                        value=${data.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description"
                        placeholder="Description">${data.description}</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                        value=${data.imageUrl}>
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
    `
    showNavigation()
    render(view, main);
}

async function onEdit(e) {
    e.preventDefault();

    let { title, date, author, description, imageUrl } = Object.fromEntries(new FormData(e.currentTarget));

    if (title !== '' && date !== '' && author !== '' && description !== '' && imageUrl !== '') {
        await put(`data/theaters/${id}`, { title, date, author, description, imageUrl });
        page.redirect(`/details/${id}`)
    }
}

export async function showEdit(ctx){
    id = ctx.params.id;

    let data = await get(`data/theaters/${id}`);
    editRender(data)
}