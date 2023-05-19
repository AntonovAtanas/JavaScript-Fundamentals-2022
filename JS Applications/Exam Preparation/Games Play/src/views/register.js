import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/auth.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function showRegister() {
    let view = html`
            <section id="register-page" class="content auth">
                <form id="register" @submit=${onRegister}>
                    <div class="container">
                        <div class="brand-logo"></div>
                        <h1>Register</h1>
            
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="maria@email.com">
            
                        <label for="pass">Password:</label>
                        <input type="password" name="password" id="register-password">
            
                        <label for="con-pass">Confirm Password:</label>
                        <input type="password" name="confirm-password" id="confirm-password">
            
                        <input class="btn submit" type="submit" value="Register">
            
                        <p class="field">
                            <span>If you already have profile click <a href="/login">here</a></span>
                        </p>
                    </div>
                </form>
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
    let rePass = data['confirm-password'];

    if (email !== '' && password !== '' && rePass !== '' && password === rePass) {
        await register(email, password);
    }
}

