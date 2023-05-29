import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/auth.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function showLogin() {

    let view = html`
    <section id="login-page" class="login">
        <form id="login-form" action="" method="" @submit=${onLogin}>
            <fieldset>
                <legend>Login Form</legend>
                <p class="field">
                    <label for="email">Email</label>
                    <span class="input">
                        <input type="text" name="email" id="email" placeholder="Email">
                    </span>
                </p>
                <p class="field">
                    <label for="password">Password</label>
                    <span class="input">
                        <input type="password" name="password" id="password" placeholder="Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Login">
            </fieldset>
        </form>
    </section>
    `

    showNavigation()
    render(view, main);
}

async function onLogin(e) {
    e.preventDefault();

    let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    if (email !== '' && password !== '') {
        await login(email, password)
    }
}