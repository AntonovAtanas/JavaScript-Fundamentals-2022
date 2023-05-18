import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'

import { navigationView } from './navigation.js';
import { post } from '../api/api.js';

let main = document.querySelector('main');

export function createView() {

    let view = html`
    <section id="create">
        <div class="form">
            <h2>Create Offer</h2>
            <form class="create-form" @submit=${onCreate}>
                <input type="text" name="title" id="job-title" placeholder="Title" />
                <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
                <input type="text" name="category" id="job-category" placeholder="Category" />
                <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
                <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                    cols="50"></textarea>
                <input type="text" name="salary" id="job-salary" placeholder="Salary" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
    `

    navigationView();
    render(view, main);
}

async function onCreate(e) {
    e.preventDefault();

    let {title, imageUrl, category, description, requirements, salary} = Object.fromEntries(new FormData(e.currentTarget));

    if (title !== '' && imageUrl !== '' && category !== '' && description !== '' && requirements !== '' && salary !== '') {
        await post('data/offers', {title, imageUrl, category, description, requirements, salary});
        page.redirect('/dashboard')
    } else {
        alert('Please enter valid fields!')
    }

}

