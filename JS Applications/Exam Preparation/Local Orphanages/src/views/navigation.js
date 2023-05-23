import { html, render } from '../../node_modules/lit-html/lit-html.js';

import { isAuthenticated } from '../api/auth.js';

let header = document.querySelector('header');

export function showNavigation() {
    let view = html`
    <!-- Navigation -->
    <h1><a href="/">Orphelp</a></h1>
    
    <nav>
        <a href="/">Dashboard</a>
        ${isAuthenticated()
            ? html`
        <div id="user">
            <a href="/my-posts">My Posts</a>
            <a href="/create">Create Post</a>
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