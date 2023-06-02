import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { post } from '../api/api.js';
import page from '../../node_modules/page/page.mjs'

import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function showAdd() {
    let view = html`
    <section id="create">
        <div class="form">
            <h2>Add item</h2>
            <form class="create-form" @submit=${onAdd}>
                <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
                <input type="text" name="model" id="shoe-model" placeholder="Model" />
                <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
                <input type="text" name="release" id="shoe-release" placeholder="Release date" />
                <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
                <input type="text" name="value" id="shoe-value" placeholder="Value" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
    `;

    showNavigation();
    render(view, main);
}

async function onAdd(e){
    e.preventDefault();

    let {brand, model, imageUrl, release, designer, value} = Object.fromEntries(new FormData(e.currentTarget));

    if(brand !== '' && model !== '' && imageUrl !== '' && release !== '' && designer !== '' && value !== ''){
        await post('data/shoes', {brand, model, imageUrl, release, designer, value});
        page.redirect('/dashboard')
    }
}