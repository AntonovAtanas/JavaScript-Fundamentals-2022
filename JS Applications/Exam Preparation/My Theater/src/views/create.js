import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';
import { post } from '../api/api.js';
import page from '../../node_modules/page/page.mjs'

let main = document.querySelector('main');

export function showCreate() {
    let view = html`
    <section id="createPage">
        <form class="create-form" @submit=${onCreate}>
            <h1>Create Theater</h1>
            <div>
                <label for="title">Title:</label>
                <input id="title" name="title" type="text" placeholder="Theater name" value="">
            </div>
            <div>
                <label for="date">Date:</label>
                <input id="date" name="date" type="text" placeholder="Month Day, Year">
            </div>
            <div>
                <label for="author">Author:</label>
                <input id="author" name="author" type="text" placeholder="Author">
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea id="description" name="description" placeholder="Description"></textarea>
            </div>
            <div>
                <label for="imageUrl">Image url:</label>
                <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
            </div>
            <button class="btn" type="submit">Submit</button>
        </form>
    </section>
    `
    showNavigation()
    render(view, main);
}

async function onCreate(e) {
    e.preventDefault();

    let { title, date, author, description, imageUrl } = Object.fromEntries(new FormData(e.currentTarget));

    if (title !== '' && date !== '' && author !== '' && description !== '' && imageUrl !== '') {
        await post('data/theaters', { title, date, author, description, imageUrl });
        page.redirect('/')
    }
}