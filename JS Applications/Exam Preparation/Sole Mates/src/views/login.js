import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/auth.js';

import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function showLogin() {
    let view = html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onLogin}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
    `;

    showNavigation();
    render(view, main);
}

async function onLogin(e){
    e.preventDefault();

    let {email, password} = Object.fromEntries(new FormData(e.currentTarget));

    if (email !== '' && password !== ''){
        await login(email, password);
    }
}