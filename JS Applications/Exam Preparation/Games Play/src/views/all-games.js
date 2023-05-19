import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

function gamesRender(data) {
    let view = html`
    <section id="catalog-page">
        <h1>All Games</h1>
        ${data.length === 0
        ? html`
        <h3 class="no-articles">No articles yet</h3>
        `
        : html `
        ${data.map(game => html `
        <div class="allGames">
            <div class="allGames-info">
                <img src=${game.imageUrl}>
                <h6>${game.category}</h6>
                <h2>${game.title}</h2>
                <a href=${`/details/${game._id}`} class="details-button">Details</a>
            </div>
        </div>
        `)}
        `
        }
    </section>
    `
    showNavigation();
    render(view, main);
}


export async function showGames() {
    let data = await get('data/games?sortBy=_createdOn%20desc');
    gamesRender(data)
}