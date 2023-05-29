import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { isAuthenticated } from '../api/auth.js'

let header = document.getElementById('site-header');

export function showNavigation() {

    let view = html`
    <nav class="navbar">
        <section class="navbar-dashboard">
            <a href="/">Dashboard</a>
            ${isAuthenticated() ? html`
            <div id="user">
                <span>Welcome, ${sessionStorage.email}</span>
                <a class="button" href="/my-books">My Books</a>
                <a class="button" href="/add">Add Book</a>
                <a class="button" href="/logout">Logout</a>
            </div>
            `
            :
            html`
            <div id="guest">
                <a class="button" href="/login">Login</a>
                <a class="button" href="/register">Register</a>
            </div>
            `}
        </section>
    </nav>
    `

    render(view, header);
}