import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import { get, post } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

let id;

async function detailsRender(data) {
    let view = html`
        <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${data.title}</h1>
                    <div>
                        <img src=${data.imageUrl} />
                    </div>
                </div>
        
                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${data.description}</p>
                    <h4>Date: ${data.date}</h4>
                    <h4>Author: ${data.author}</h4>
                    <div class="buttons">
                        ${sessionStorage.userId === data._ownerId
                        ? html `
                        <a class="btn-delete" href=${`/delete/${id}`}>Delete</a>
                        <a class="btn-edit" href=${`/edit/${id}`}>Edit</a>
                        `
                        : nothing
                        }
                        ${await hasLiked() === 0 && sessionStorage.userId
                        ? html `<a class="btn-like" href="#" @click=${like}>Like</a>`
                        : nothing
                        }
                        
                    </div>
                    <p class="likes">Likes: ${await getLikes()}</p>
                </div>
            </div>
        </section>
    `
    showNavigation()
    render(view, main);
}

export async function showDetails(ctx) {
    id = ctx.params.id;
    let data = await get(`data/theaters/${id}`);
    detailsRender(data);
}

async function getLikes(){
    return await get(`data/likes?where=theaterId%3D%22${id}%22&distinct=_ownerId&count`)
}

async function hasLiked(){
    return await get(`data/likes?where=theaterId%3D%22${id}%22%20and%20_ownerId%3D%22${sessionStorage.userId}%22&count`)
}

async function like(){
    await post('data/likes', {theaterId: id});
}