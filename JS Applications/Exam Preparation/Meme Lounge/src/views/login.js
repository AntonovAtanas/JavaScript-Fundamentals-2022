import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/auth.js';

import { showNavigation } from './navigation.js';
import { notificationError } from './notification.js';

let main = document.querySelector('main');

export function showLogin() {
    let view = html`
            <section id="login">
                <form id="login-form" @submit=${onLogin}>
                    <div class="container">
                        <h1>Login</h1>
                        <label for="email">Email</label>
                        <input id="email" placeholder="Enter Email" name="email" type="text">
                        <label for="password">Password</label>
                        <input id="password" type="password" placeholder="Enter Password" name="password">
                        <input type="submit" class="registerbtn button" value="Login">
                        <div class="container signin">
                            <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                        </div>
                    </div>
                </form>
            </section>
    `
    showNavigation();
    render(view, main);
}

async function onLogin(e) {
    e.preventDefault();

    let {email, password} = Object.fromEntries(new FormData(e.currentTarget));

    if (email !== '' && password !== ''){
        await login(email, password);
    } else {
        notificationError('Please fill all fields')
    }
}