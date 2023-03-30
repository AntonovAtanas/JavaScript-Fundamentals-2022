import { html, render } from '../../node_modules/lit-html/lit-html.js';
import {isAuthenticated} from '../api/auth.js'
import page from '../../node_modules/page/page.mjs'

import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function showHome(){
    let view = html `
    ${isAuthenticated()
    ? page.redirect('/all-memes')
    : html `
    <section id="welcome">
            <div id="welcome-container">
                <h1>Welcome To Meme Lounge</h1>
                <img src="/images/welcome-meme.jpg" alt="meme">
                <h2>Login to see our memes right away!</h2>
                <div id="button-div">
                    <a href="/login" class="button">Login</a>
                    <a href="/register" class="button">Register</a>
                </div>
            </div>
        </section>
    `
    }
    `
    showNavigation();
    render(view, main);
}