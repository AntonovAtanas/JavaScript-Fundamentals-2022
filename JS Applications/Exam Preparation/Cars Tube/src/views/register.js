import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';
import { register } from '../api/auth.js';

let main = document.querySelector('main');

export async function registerView() {

    let view = html`
    <section id="register">
            <div class="container">
                <form id="register-form" @submit=${onRegister}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="/login">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>
    `;

    showNavigation()
    render(view, main);
}

async function onRegister(e) {
    e.preventDefault();

    let { username, password, repeatPass } = Object.fromEntries(new FormData(e.currentTarget));
    
    if (username !== '' && password !== '' && repeatPass !== '' && password === repeatPass) {
        await register(username, password);
    } else {
        alert('Please fill all fields!')
    }

}