import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import { get, post } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

let id;

async function detailsRender(data) {
    let view = html`
            <section id="details-page">
                <h1 class="title">Post Details</h1>
            
                <div id="container">
                    <div id="details">
                        <div class="image-wrapper">
                            <img src=${data.imageUrl} alt="Material Image" class="post-image">
                        </div>
                        <div class="info">
                            <h2 class="title post-title">${data.title}</h2>
                            <p class="post-description">Description: ${data.description}</p>
                            <p class="post-address">Address: ${data.address}</p>
                            <p class="post-number">Phone number: ${data.phone}</p>
                            <p class="donate-Item">Donate Materials: ${await totalDonations()}</p>
            
                            
                            ${sessionStorage.userId === data._ownerId
                            ? html`
                            <div class="btns">
                                <a href=${`/edit/${data._id}`} class="edit-btn btn">Edit</a>
                                <a href=${`/delete/${data._id}`} class="delete-btn btn">Delete</a>
                            </div>
                            `
                            : nothing
                            }

                            ${sessionStorage.userId !== data.ownerId && await hasDonated() === 0
                            ? html`
                            <div class="btns">
                                <a href="#" class="donate-btn btn" @click=${onDonate}>Donate</a>
                            </div>
                            `
                            : nothing
                            }
                        </div>
                    </div>
                </div>
            </section>
    `
    showNavigation();
    render(view, main);
}

export async function getDetails(ctx) {
    id = ctx.params.id
    let data = await get(`data/posts/${id}`);

    detailsRender(data);
}

async function onDonate(){
    await post(`data/donations`, {postId: id});
}

async function totalDonations(){
    return await get(`data/donations?where=postId%3D%22${id}%22&distinct=_ownerId&count`)
}

async function hasDonated(){
    return await get(`data/donations?where=postId%3D%22${id}%22%20and%20_ownerId%3D%22${sessionStorage.userId}%22&count`)
}