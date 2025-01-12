import { html, render } from '../../node_modules/lit-html/lit-html.js';

import { isAuthenticated } from '.././api/auth.js'


let header = document.querySelector('header');

export function navigationView() {
    let view = html`
            <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
            
            <nav>
                <div>
                    <a href="/dashboard">Dashboard</a>
                </div>
                ${isAuthenticated()
                ? html`
                <div class="user">
                    <a href="/add" >Add Album</a>
                    <a href="/logout">Logout</a>
                </div>
                `
                :
                html`
                <div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                `}
            </nav>
    `;

    render(view, header)
}