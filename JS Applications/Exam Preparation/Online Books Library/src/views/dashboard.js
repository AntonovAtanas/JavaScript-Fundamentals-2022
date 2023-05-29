import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

function showDashboard(response){
    
    let view = html`
    <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            ${response.length == 0 ? html`<p class="no-books">No books in database!</p>` : html`
            <ul class="other-books-list">
            ${response.map(book => 
                html`
                <li class="otherBooks">
                    <h3>${book.title}</h3>
                    <p>Type: ${book.type}</p>
                    <p class="img"><img src=${book.imageUrl}></p>
                    <a class="button" href=${`/book/${book._id}`}>Details</a>
                </li>
                `)}
            </ul>
            `}
        </section>
    `

    showNavigation()
    render(view, main);
}

export async function getBooks(){
    let response = await get('data/books?sortBy=_createdOn%20desc');
    showDashboard(response);
}