import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/auth.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function showRegister() {
    let view = html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${onRegister}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
    </div>
</section>
    `
    showNavigation();
    render(view, main);
}

async function onRegister(e) {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.currentTarget));

    let email = data.email;
    let password = data.password;
    let rePass = data['re-password']

    if (email !== '' && password !== '' && rePass !== '' && password === rePass) {
        await register(email, password)
    }
}