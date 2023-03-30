import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';

import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

function profileRender(data) {
    let view = html`
            <section id="user-profile-page" class="user-profile">
                <article class="user-info">
                    ${sessionStorage.gender === 'male'
            ? html`
                    <img id="user-avatar-url" alt="user-profile" src="../../images/male.png">
                    `
            : html`
                    <img id="user-avatar-url" alt="user-profile" src="../../images/female.png">
                    `
            }
                    <div class="user-content">
                        <p>Username: ${sessionStorage.username}</p>
                        <p>Email: ${sessionStorage.email}</p>
                        <p>My memes count: ${data.length}</p>
                    </div>
                </article>
                <h1 id="user-listings-title">User Memes</h1>
                <div class="user-meme-listings">
                    ${data.length === 0 
                    ? html `
                    <p class="no-memes">No memes in database.</p>
                    `
                    : html `
                    ${data.map(meme => html `
                    <div class="user-meme">
                        <p class="user-meme-title">${meme.title}</p>
                        <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
                        <a class="button" href=${`/details/${meme._id}`}>Details</a>
                    </div>
                    `)}
                    `
                    }
                </div>
            </section>
    `
    showNavigation();
    render(view, main);
}

export async function showProfile() {
    let id = sessionStorage.userId;
    let data = await get(`data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
    profileRender(data)
}