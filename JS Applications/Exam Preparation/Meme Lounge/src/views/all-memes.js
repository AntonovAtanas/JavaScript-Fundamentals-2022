import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';

import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

function allMemesRender(data) {
    let view = html`
            <section id="meme-feed">
                <h1>All Memes</h1>
                <div id="memes">
                    <!-- Display : All memes in database ( If any ) -->
                    ${data.length == 0
                ? html`
                    <p class="no-memes">No memes in database.</p>
                    `
                : html`
                    ${data.map(meme => html`
                    <div class="meme">
                        <div class="card">
                            <div class="info">
                                <p class="meme-title">${meme.title}</p>
                                <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
                            </div>
                            <div id="data-buttons">
                                <a class="button" href=${`/details/${meme._id}`}>Details</a>
                            </div>
                        </div>
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

export async function showAllMemes() {
    let data = await get('data/memes?sortBy=_createdOn%20desc');
    allMemesRender(data);
}

