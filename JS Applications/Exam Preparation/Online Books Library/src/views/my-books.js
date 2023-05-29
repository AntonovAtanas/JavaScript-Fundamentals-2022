import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

function showMyBooks(data){
    
    let view = html`
    <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
           
            <ul class="my-books-list">
                ${data.length === 0 ? html`<p class="no-books">No books in database!</p>`
                :
                data.map(book => html`
                                <li class="otherBooks">
                    <h3>${book.title}</h3>
                    <p>Type: ${book.type}</p>
                    <p class="img"><img src=${book.imageUrl}></p>
                    <a class="button" href=${`/book/${book._id}`}>Details</a>
                </li>
                `)    
            }
            </ul>
        </section>
    `

    showNavigation()
    render(view, main);
}

export async function myBooks(){
    let userId = sessionStorage.userId;
    let data = await get(`data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    showMyBooks(data);
}