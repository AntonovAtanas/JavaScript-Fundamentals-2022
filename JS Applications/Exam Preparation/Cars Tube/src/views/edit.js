import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'
import { showNavigation } from './navigation.js';
import { get, put } from '../api/api.js';

let main = document.querySelector('main');

let id;

export function editView(data) {

    let view = html`
            <section id="edit-listing">
            <div class="container">

                <form id="edit-form" @submit=${onEdit}>
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" value=${data.brand}>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" value=${data.model}>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" value=${data.description}>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" value=${data.year}>

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" value=${data.imageUrl}>

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" value=${data.price}>

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>
    `;

    showNavigation()
    render(view, main);
}

export async function getEdit(ctx) {
    
    id = ctx.params.id
    let data = await get(`data/cars/${id}`);
    editView(data);
}

async function onEdit(e) {
    e.preventDefault()

    let {brand, model, description, year, imageUrl, price} = Object.fromEntries(new FormData(e.currentTarget));
    console.log()
    if (brand !== '' && model !== '' && description !== '' && year !== '' && imageUrl !== '' && price !== ''){
        await put(`data/cars/${id}`, {brand, model, description, year: Number(year), imageUrl, price: Number(price)});
        page.redirect(`/details/${id}`);
    }
}