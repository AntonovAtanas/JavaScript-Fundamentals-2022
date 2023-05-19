import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'
import { get, put } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

let id;

function editRender(data) {
    let view = html`
            <section id="edit-page" class="auth">
                <form id="edit" @submit=${onEdit}>
                    <div class="container">
            
                        <h1>Edit Game</h1>
                        <label for="leg-title">Legendary title:</label>
                        <input type="text" id="title" name="title" value=${data.title}>
            
                        <label for="category">Category:</label>
                        <input type="text" id="category" name="category" value=${data.category}>
            
                        <label for="levels">MaxLevel:</label>
                        <input type="number" id="maxLevel" name="maxLevel" min="1" value=${data.maxLevel}>
            
                        <label for="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" value=${data.imageUrl}>
            
                        <label for="summary">Summary:</label>
                        <textarea name="summary" id="summary">${data.summary}</textarea>
                        <input class="btn submit" type="submit" value="Edit Game">
            
                    </div>
                </form>
            </section>
    `

    showNavigation();
    render(view, main);
}

async function onEdit(e) {
    e.preventDefault();

    let { title, category, maxLevel, imageUrl, summary } = Object.fromEntries(new FormData(e.currentTarget));

    if (title !== '' && category !== '' && maxLevel !== '' && imageUrl !== '' && summary !== '') {
        await put(`data/games/${id}`, { title, category, maxLevel, imageUrl, summary });
        page.redirect(`/details/${id}`);
    }
};

export async function showEdit(ctx) {
    id = ctx.params.id;

    let data = await get(`data/games/${id}`);
    editRender(data);
}