import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { isAuthenticated } from '../api/auth.js';

let nav = document.querySelector('nav');

export function showNavigation() {
    let navigation = html`
<div class="container">
    <a class="navbar-brand" href="/">
        <img src="./images/idea.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            ${isAuthenticated() 
            ? html` 
                <li id="nav-dashboard" class="nav-item active">
                    <a class="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li id="nav-create" class="nav-item active">
                    <a class="nav-link" href="/create">Create</a>
                </li>
                <li id="nav-logout" class="nav-item">
                    <a class="nav-link" href="/logout">Logout</a>
                </li> 
            `
            : html`
                            <li id="nav-dashboard" class="nav-item active">
                    <a class="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li id="nav-login" class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
                <li id="nav-register" class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                </li>
            `
            }
        </ul>
    </div>
</div>
    `;

    render(navigation, nav);
}