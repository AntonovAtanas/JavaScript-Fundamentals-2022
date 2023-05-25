import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'

import { get, post } from '../api/api.js';
import { navigationView } from './navigation.js';

let main = document.querySelector('main');

let id;

async function detailsView(data) {
    let view = html`
        <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${data.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${data.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${data.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${data.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${data.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${data.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${await getLikes()}</span></div>

          <div id="action-buttons">
            
            ${sessionStorage.userId === data._ownerId
            ? html `
            <a href=${`/edit/${data._id}`} id="edit-btn">Edit</a>
            <a href=${`/delete/${data._id}`} id="delete-btn">Delete</a>
            `
            :
            nothing
            }

            ${sessionStorage.userId  && sessionStorage.userId !== data._ownerId && await hasLiked() == 0
                ? html`<a href="" id="like-btn" @click=${addLike}>Like</a>` 
                : nothing
                }
          </div>
        </div>
      </section>
    `;

    navigationView()
    render(view, main)
};

export async function getDetails(ctx){
    id = ctx.params.id;
    let data = await get(`data/albums/${id}`)
    detailsView(data);
};

async function addLike(){
    await post('data/likes', {albumId: id});
};

async function getLikes(){
    return await get(`data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`)
}

async function hasLiked(){
    return await get(`data/likes?where=albumId%3D%22${id}%22%20and%20_ownerId%3D%22${sessionStorage.userId}%22&count`)
}