import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { showNavigation } from './navigation.js';
import { register } from '../api/auth.js';

let main = document.querySelector('main');

export function showRegister() {
    let view = html`
    <section id="registerPage">
            <form class="registerForm" @submit=${onRegister}>
                <img src="./images/logo.png" alt="logo" />
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>
    `

    showNavigation();
    render(view, main);
}

async function onRegister(e){
    e.preventDefault();

    let {email, password, repeatPassword} = Object.fromEntries(new FormData(e.currentTarget));

    if(email !== '' && password !== '' && repeatPassword !== '' && password === repeatPassword){
        await register(email, password)
    }
}