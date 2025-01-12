import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export async function homeView() {

    let view = html`
    <section id="main">
        <div id="welcome-container">
            <h1>Welcome To Car Tube</h1>
            <img class="hero" src="/images/car-png.webp" alt="carIntro">
            <h2>To see all the listings click the link below:</h2>
            <div>
                <a href="/listings" class="button">Listings</a>
            </div>
        </div>
    </section>
    `;

    showNavigation()
    render(view, main);
}