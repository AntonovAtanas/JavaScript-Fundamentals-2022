import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { showNavigation } from './navigation.js';
import { post } from '../api/api.js';
import page from '../../node_modules/page/page.mjs'

let main = document.querySelector('main');

export function showCreate() {
    let view = html`
    <section id="createPage">
        <form class="createForm" @submit=${onCreate}>
            <img src="./images/cat-create.jpg">
            <div>
                <h2>Create PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" placeholder="Max">
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" placeholder="2 years">
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" placeholder="5kg">
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                </div>
                <button class="btn" type="submit">Create Pet</button>
            </div>
        </form>
    </section>
    `

    showNavigation();
    render(view, main);
}

async function onCreate(e) {
    e.preventDefault();

    let { name, breed, age, weight, image } = Object.fromEntries(new FormData(e.currentTarget));

    if (name !== '' && breed !== '' && age !== '' && weight !== '' && image !== '') {
        await post('data/pets', { name, breed, age, weight, image });
        e.target.reset();
        page.redirect('/dashboard');
    }
}