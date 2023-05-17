import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { isAuthenticated } from '../api/auth.js'

let header = document.querySelector('header');

export function showNavigation() {

    let view = html`
    <nav>
        <a class="active" href="/">Home</a>
        <a href="/listings">All Listings</a>
        <a href="/year">By Year</a>
        ${isAuthenticated()
            ? html`
        <div id="profile">
            <a>Welcome ${sessionStorage.username}</a>
            <a href="/my-listings">My Listings</a>
            <a href="/create">Create Listing</a>
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
    `

    render(view, header);
}