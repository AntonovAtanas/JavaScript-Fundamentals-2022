import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { isAuthenticated } from '../api/auth.js'

let header = document.querySelector('header');

export function showNavigation() {
    let view = html`
        <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                ${isAuthenticated()
            ? html`
                <li><a href="/create">Create Postcard</a></li>
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