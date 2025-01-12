import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';
import { post } from '../api/api.js';
import page from '../../node_modules/page/page.mjs'

let main = document.querySelector('main');

export function showCreate() {
    let view = html`
    <section id="create">
        <div class="form">
            <h2>Add Fruit</h2>
            <form class="create-form" @submit=${onCreate}>
                <input type="text" name="name" id="name" placeholder="Fruit Name" />
                <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
                <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                    cols="50"></textarea>
                <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
                <button type="submit">Add Fruit</button>
            </form>
        </div>
    </section>
    `
    showNavigation();
    render(view, main);
}

async function onCreate(e) {
    e.preventDefault();

    let {name, imageUrl, description, nutrition} = Object.fromEntries(new FormData(e.currentTarget));

    if(name !== '' && imageUrl !== '' && description !== '' && nutrition !== ''){
        await post('data/fruits', {name, imageUrl, description, nutrition});
        page.redirect('/dashboard');
    }
}