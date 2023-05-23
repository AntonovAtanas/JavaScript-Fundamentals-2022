import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/auth.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function loginView() {
    let view = html`
            <section id="login-page" class="auth">
                <form id="login" @submit=${onLogin}>
                    <h1 class="title">Login</h1>
            
                    <article class="input-group">
                        <label for="login-email">Email: </label>
                        <input type="email" id="login-email" name="email">
                    </article>
            
                    <article class="input-group">
                        <label for="password">Password: </label>
                        <input type="password" id="password" name="password">
                    </article>
            
                    <input type="submit" class="btn submit-btn" value="Log In">
                </form>
            </section>
    `
    showNavigation();
    render(view, main);
}

async function onLogin(e) {
    e.preventDefault();

    let {email, password} = Object.fromEntries(new FormData(e.currentTarget));

    if(email !== '' && password !== ''){
        await login(email, password);
    }
}