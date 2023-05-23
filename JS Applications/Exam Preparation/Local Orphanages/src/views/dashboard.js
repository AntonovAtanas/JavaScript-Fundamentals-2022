import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

function dashboardRender(data) {
    let view = html`
            <section id="dashboard-page">
                <h1 class="title">All Posts</h1>
                ${data.length === 0 
                ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
                : html `
                <div class="all-posts">
                ${data.map(item => html `
                
                    <div class="post">
                    <h2 class="post-title">${item.title}</h2>
                    <img class="post-image" src=${item.imageUrl} alt="Material Image">
                    <div class="btn-wrapper">
                        <a href=${`/details/${item._id}`} class="details-btn btn">Details</a>
                    </div>
                </div>
            
                `)}
                </div>
                `
            }
            </section>
    `
    showNavigation();
    render(view, main);
}

export async function getItems() {
    let data = await get('data/posts?sortBy=_createdOn%20desc');
    dashboardRender(data);
}