import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';
import { login } from '../api/auth.js';

let main = document.querySelector('main');

export async function loginView() {

    let view = html`
    <section id="login">
        <div class="container">
            <form id="login-form" action="#" method="post" @submit=${onLogin}>
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>
    
                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text">
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn" value="Login">
            </form>
            <div class="signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>
    `;

    showNavigation()
    render(view, main);
}

async function onLogin(e) {
    e.preventDefault();

    let { username, password } = Object.fromEntries(new FormData(e.currentTarget));
    
    if (username !== '' && password !== '') {
        await login(username, password);
    } else {
        alert('Please fill all fields!')
    }

}