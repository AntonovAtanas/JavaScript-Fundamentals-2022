import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { showNavigation } from './navigation.js';
import { login } from '../api/auth.js';

let main = document.querySelector('main');

export function showLogin() {
    let view = html`
    <section id="loginPage">
        <form class="loginForm" @submit=${onLogin}>
            <img src="./images/logo.png" alt="logo" />
            <h2>Login</h2>
    
            <div>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
    
            <div>
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>
    
            <button class="btn" type="submit">Login</button>
    
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </form>
    </section>
    `

    showNavigation();
    render(view, main);
}

async function onLogin(e){
    e.preventDefault();

    let {email, password} = Object.fromEntries(new FormData(e.currentTarget));

    if(email !== '' && password !== ''){
        await login(email, password)
    }
}