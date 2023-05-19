import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { isAuthenticated } from '../api/auth.js';

let header = document.querySelector('header');

export function showNavigation() {
    let view = html`
    <h1><a class="home" href="/">GamesPlay</a></h1>
    <nav>
        <a href="/all-games">All games</a>
        ${isAuthenticated()
        ? html`
        <div id="user">
            <a href="/create">Create Game</a>
            <a href="/logout">Logout</a>
        </div>
        `
        : html`
        <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        `
        }
    </nav>
    `;

    render(view, header);
}