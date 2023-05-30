import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { showNavigation } from './navigation.js';
import { get, put } from '../api/api.js';
import page from '../../node_modules/page/page.mjs'

let main = document.querySelector('main');

let id;

function editRender(data) {
    let view = html`
    <section id="editPage">
            <form class="editForm" @submit=${updatePet}>
                <img src=${data.image}>
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" value=${data.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value=${data.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" value=${data.age}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value=${data.weight}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" value=${data.image}>
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>
    `

    showNavigation();
    render(view, main);
}

export async function showEdit(ctx) {
    id = ctx.params.id
    let data = await get(`data/pets/${id}`);
    editRender(data);
}

async function updatePet(e){
    e.preventDefault();

    let { name, breed, age, weight, image } = Object.fromEntries(new FormData(e.currentTarget));

    if (name !== '' && breed !== '' && age !== '' && weight !== '' && image !== '') {
        await put(`data/pets/${id}`, { name, breed, age, weight, image });
        page.redirect(`/details/${id}`);
    }
}