import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'
import { get, put } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

let id;

function editBook(data) {
    
    let view = html`
    <section id="edit-page" class="edit">
            <form id="edit-form" action="#" method="" @submit=${onEdit}>
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" value=${data.title}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">${data.description}</textarea>
                        </span>
                     </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value=${data.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" value=${data.type}>
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>
    `
    showNavigation()
    render(view, main);
}

export async function editView(ctx){
    id = ctx.params.id;
    let data = await get(`data/books/${id}`);
    editBook(data);
}

async function onEdit(e) {
    e.preventDefault();

    let {title, description, imageUrl, type} = Object.fromEntries(new FormData(e.currentTarget));

    if (title !== '' && description !== '' && imageUrl !== '' && type !== ''){
        await put(`data/books/${id}`, {title, description, imageUrl, type});
        page.redirect(`/book/${id}`)
    } else {
        alert('Please fill all input fields')
    }
}