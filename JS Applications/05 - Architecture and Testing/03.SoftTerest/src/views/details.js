import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js'
import { showNavigation } from './navigation.js';
import * as requester from '../api/api.js'

let main = document.querySelector('main');

export function showDetails(idea) {
    let details = html`
    <div id="details" class="container home some">
        <img class="det-img" src=${idea.img} />
            <div class="desc">
         <h2 class="display-5">${idea.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${idea.description}</p>
        </div>
    ${idea._ownerId === localStorage.userId 
    ? 
    html `
        <div class="text-center">
        <a class="btn detb" href="/delete/${idea._id}">Delete</a>
    </div>
    `
    :
    nothing
}

</div>
    `;
    
    showNavigation()
    render(details, main);
}

export async function getMovie (ctx){
    let ideaId = ctx.params.idea;

    let idea = await requester.get(`data/ideas/${ideaId}`);
    showDetails(idea)
}