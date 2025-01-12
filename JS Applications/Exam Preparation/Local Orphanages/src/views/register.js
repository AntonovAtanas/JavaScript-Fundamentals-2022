import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/auth.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function registerView() {
    let view = html`
            <section id="register-page" class="auth">
                <form id="register" @submit=${onRegister}>
                    <h1 class="title">Register</h1>
            
                    <article class="input-group">
                        <label for="register-email">Email: </label>
                        <input type="email" id="register-email" name="email">
                    </article>
            
                    <article class="input-group">
                        <label for="register-password">Password: </label>
                        <input type="password" id="register-password" name="password">
                    </article>
            
                    <article class="input-group">
                        <label for="repeat-password">Repeat Password: </label>
                        <input type="password" id="repeat-password" name="repeatPassword">
                    </article>
            
                    <input type="submit" class="btn submit-btn" value="Register">
                </form>
            </section>
    `
    showNavigation();
    render(view, main);
}

async function onRegister(e) {
    e.preventDefault();

    let { email, password, repeatPassword} = Object.fromEntries(new FormData(e.currentTarget));

    if (email !== '' && password !== '' && repeatPassword !== '' && password === repeatPassword) {
       await register(email, password);
    }
}