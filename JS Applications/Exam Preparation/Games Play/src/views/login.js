import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/auth.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function showLogin() {
    let view = html`
    <section id="login-page" class="auth">
        <form id="login" @submit=${onLogin}>
    
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Login</h1>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">
    
                <label for="login-pass">Password:</label>
                <input type="password" id="login-password" name="password">
                <input type="submit" class="btn submit" value="Login">
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </div>
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
        await login(email, password);
    }
}

