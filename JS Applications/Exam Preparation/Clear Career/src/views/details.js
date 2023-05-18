import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';

import { get, post } from '../api/api.js';

import { navigationView } from './navigation.js';

let main = document.querySelector('main');
let id

async function detailsRender(data) {
    
    let view = html`
            <section id="details">
                <div id="details-wrapper">
                    <img id="details-img" src=${data.imageUrl} alt="example1" />
                    <p id="details-title">${data.title}</p>
                    <p id="details-category">
                        Category: <span id="categories">${data.category}</span>
                    </p>
                    <p id="details-salary">
                        Salary: <span id="salary-number">${data.salary}</span>
                    </p>
                    <div id="info-wrapper">
                        <div id="details-description">
                            <h4>Description</h4>
                            <span>${data.description}</span>
                        </div>
                        <div id="details-requirements">
                            <h4>Requirements</h4>
                            <span>${data.requirements}</span>
                        </div>
                    </div>
                    
                    ${sessionStorage.userId === data._ownerId
                    ? html`
                    <div id="action-buttons">
                        <a href=${`/edit/${data._id}`} id="edit-btn">Edit</a>
                        <a href=${`/delete/${data._id}`} id="delete-btn">Delete</a>
                    </div>
                    `
                    : nothing
                    }
                    <p>Applications: <strong id="applications" >${await getApplies()}</strong></p>
                    ${sessionStorage.userId && await hasApplied() === 0 ? html` <a href="" id="apply-btn" @click=${apply}>Apply</a> ` : nothing}
                </div>
            </section>
    `

    navigationView();
    render(view, main);
}

export async function detailsView(ctx) {
    id = ctx.params.jobId;

    let data = await get(`data/offers/${id}`);
    detailsRender(data);
}

async function apply(){
    await post('data/applications', {offerId: id});
}

async function getApplies(){
    return await get(`data/applications?where=offerId%3D%22${id}%22&distinct=_ownerId&count`)
}

async function hasApplied(){
    return await get(`data/applications?where=offerId%3D%22${id}%22%20and%20_ownerId%3D%22${sessionStorage.userId}%22&count`)
}
