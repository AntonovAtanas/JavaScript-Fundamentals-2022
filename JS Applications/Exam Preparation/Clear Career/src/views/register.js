import { html, render } from '../../node_modules/lit-html/lit-html.js';

import { navigationView } from './navigation.js';
import { register } from '../api/auth.js';

let main = document.querySelector('main');

export function registerView() {

    let view = html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form class="login-form" @submit=${onRegister}>
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>
    `

    navigationView();
    render(view, main);
}

async function onRegister(e) {
    e.preventDefault();

    let userData = Object.fromEntries(new FormData(e.currentTarget));

    let email = userData.email;
    let password = userData.password;
    let rePass = userData['re-password'];

    if (email !== '' && password !== '' && rePass !== '' && password === rePass) {
        await register(email, password)
    } else {
        alert('Please enter valid fields!')
    }

}

