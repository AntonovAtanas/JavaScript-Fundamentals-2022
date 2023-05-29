import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/auth.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function showRegister() {

    let view = html`
    <section id="register-page" class="register">
        <form id="register-form" action="" method="" @submit=${onRegister}>
            <fieldset>
                <legend>Register Form</legend>
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
                <p class="field">
                    <label for="repeat-pass">Repeat Password</label>
                    <span class="input">
                        <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Register">
            </fieldset>
        </form>
    </section>
    `

    showNavigation()
    render(view, main);
}

async function onRegister(e) {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.currentTarget));

    let email = data.email;
    let password = data.password;
    let rePass = data['confirm-pass'];

    if(email !== '' && password !== '' && rePass !== '' && password === rePass){
        await register(email, password);
    }else{
        alert('Incorrect fields!');
    }
}