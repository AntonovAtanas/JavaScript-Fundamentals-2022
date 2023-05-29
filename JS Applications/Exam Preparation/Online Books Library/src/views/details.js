import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import { get, post } from '../api/api.js';
import { showNavigation } from './navigation.js';
import { isAuthenticated } from '../api/auth.js';

let main = document.querySelector('main');

let id;

async function showDetails(data) {
    
    let view = html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${data.title}</h3>
            <p class="type">Type: ${data.type}</p>
            <p class="img"><img src=${data.imageUrl}></p>
            <div class="actions">
                ${sessionStorage.userId === data._ownerId ? html`
                <a class="button" href=${`/edit/${data._id}`}>Edit</a>
                <a class="button" href=${`/delete/${data._id}`}>Delete</a>
                `
                :
                nothing}
    
                <!-- Bonus -->
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                ${isAuthenticated() && sessionStorage.userId !== data._ownerId && await getLike() == 0 ? html `<a class="button" href="#" @click=${like}>Like</a>` : nothing}
    
                <!-- ( for Guests and Users )  -->
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: ${await totalLikes()}</span>
                </div>
                <!-- Bonus -->
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${data.description}</p>
        </div>
    </section>
    `
    showNavigation()
    render(view, main);
}

export async function bookDetails(ctx) {
    id = ctx.params.id
    let data = await get(`data/books/${id}`);
    showDetails(data)
}

async function like(){
    await post(`data/likes`, {bookId: id});
}

async function getLike(){
    return await get(`data/likes?where=bookId%3D%22${id}%22%20and%20_ownerId%3D%22${sessionStorage.userId}%22&count`)
}

async function totalLikes(){
    return await get(`data/likes?where=bookId%3D%22${id}%22&distinct=_ownerId&count`)
}

