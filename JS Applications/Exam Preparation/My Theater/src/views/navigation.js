import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { isAuthenticated } from '../api/auth.js';

let header = document.querySelector('header');

export function showNavigation() {
    let view = html`
        <nav>
            <a href="/">Theater</a>
            <ul>
                ${isAuthenticated()
            ? html`
                <li><a href="/profile">Profile</a></li>
                <li><a href="/create">Create Event</a></li>
                <li><a href="/logout">Logout</a></li>
                `
            : html`
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                `
                }
            </ul>
        </nav>
    `
    
    render(view, header);
}