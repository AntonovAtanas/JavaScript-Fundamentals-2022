import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import { get, post } from '../api/api.js';
import { showNavigation } from './navigation.js';
import page from '../../node_modules/page/page.mjs'

let main = document.querySelector('main');

let id;

function detailsRender(data, comments) {
    let view = html`
    <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${data.imageUrl} />
                    <h1>${data.title}</h1>
                    <span class="levels">MaxLevel: ${data.maxLevel}</span>
                    <p class="type">${data.category}</p>
                </div>

                <p class="text">${data.summary}</p>

                <div class="details-comments">
                <h2>Comments:</h2>
                ${comments.length === 0 
                ? html `
                <p class="no-comment">No comments.</p>
                `
                : html `
                <ul>
                    ${comments.map(comment =>
                        html `
                        <li class="comment">
                            <p>${comment.comment}</p>
                        </li>
                        `
                    )}
                    </ul>
                `
                }
                </div>

                ${sessionStorage.userId === data._ownerId
                ? html `
                <div class="buttons">
                    <a href=${`/edit/${data._id}`} class="button">Edit</a>
                    <a href=${`/delete/${data._id}`} class="button">Delete</a>
                </div>
                `
                : nothing
                }

            </div>

            ${sessionStorage.userId &&  sessionStorage.userId !== data._ownerId
            ? html `
            <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form" @submit=${onComment}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>
            `
            : nothing
            }

        </section>
    `
    showNavigation();
    render(view, main);
}


export async function showDetails(ctx) {
    id = ctx.params.id;
    let data = await get(`data/games/${id}`);

    let comments = await get(`data/comments?where=gameId%3D%22${id}%22`);

    detailsRender(data, comments)
}

async function onComment(e){
    e.preventDefault();

    let {comment} = Object.fromEntries(new FormData(e.currentTarget));

    if (comment !== ''){
        await post(`data/comments`, {gameId: id, comment});
        e.target.reset();
        page.redirect(`/details/${id}`);
    }
}