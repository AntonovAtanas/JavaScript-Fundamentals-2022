import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'

import { navigationView } from './navigation.js';
import { get, put } from '../api/api.js';

let main = document.querySelector('main');

let id;

export function editRender(data) {

    let view = html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form class="edit-form" @submit=${editHandler}>
            <input type="text" name="title" id="job-title" placeholder="Title" value=${data.title}>
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value=${data.imageUrl}>
            <input type="text" name="category" id="job-category" placeholder="Category" value=${data.category}>
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50">${data.description}</textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50">${data.requirements}</textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" value=${data.salary}>

            <button type="submit">post</button>
        </form>
    </div>
</section>
    `

    navigationView();
    render(view, main);
}

async function editHandler(e) {
    e.preventDefault();

    let { title, imageUrl, category, description, requirements, salary } = Object.fromEntries(new FormData(e.currentTarget));

    if (title !== '' && imageUrl !== '' && category !== '' && description !== '' && requirements !== '' && salary !== '') {
        await put(`data/offers/${id}`, { title, imageUrl, category, description, requirements, salary });
        page.redirect(`/details/${id}`)
    } else {
        alert('Please enter valid fields!')
    }
}

export async function editView(ctx) {
    id = ctx.params.jobId
    let data = await get(`data/offers/${id}`);
    editRender(data);
}