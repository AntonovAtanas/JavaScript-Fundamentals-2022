import { get } from "../api/api.js";
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from "./navigation.js";

let main = document.querySelector('main')

function profileRender(data) {
    let view = html`
    <section id="profilePage">
        <div class="userInfo">
            <div class="avatar">
                <img src="./images/profilePic.png">
            </div>
            <h2>${sessionStorage.email}</h2>
        </div>
        <div class="board">
            
            ${data.length === 0 
            ? html `
            <div class="no-events">
                <p>This user has no events yet!</p>
            </div>
            `
            : html `
            ${data.map(theater => html `
            <div class="eventBoard">
                <div class="event-info">
                    <img src=${theater.imageUrl}>
                    <h2>${theater.title}</h2>
                    <h6>${theater.date}</h6>
                    <a href=${`/details/${theater._id}`} class="details-button">Details</a>
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

export async function showProfile() {
    let userId = sessionStorage.userId;
    let data = await get(`data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    profileRender(data);
}