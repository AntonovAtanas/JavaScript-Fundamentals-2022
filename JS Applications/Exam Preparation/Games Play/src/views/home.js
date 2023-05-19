import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

function homeRender(data) {
    let view = html`
    <section id="welcome-world">
    
        <div class="welcome-message">
            <h2>ALL new games are</h2>
            <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero">
        <div id="home-page">
            ${data.length === 0
                ? html`
            <p class="no-articles">No games yet</p>
            `
                : html`
            <h1>Latest Games</h1>
            ${
                data.slice(0, 3).map(game => html `
                <div class="game">
                <div class="image-wrap">
                    <img src=${game.imageUrl}>
                </div>
                <h3>${game.title}</h3>
                <div class="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div class="data-buttons">
                    <a href="${`details/${game._id}`}" class="btn details-btn">Details</a>
                </div>
            </div>
                `)
            }
            
            `
            }
        </div>
    </section>
    `
    showNavigation();
    render(view, main);
}


export async function showHome() {
    let data = await get('data/games?sortBy=_createdOn%20desc&distinct=category');
    homeRender(data)
}