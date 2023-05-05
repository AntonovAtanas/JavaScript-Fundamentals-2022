import { onRegister } from "../api-calls.js";
import { hideAll } from "../router.js";

document.getElementById('register-form').addEventListener('submit', register);

export function registerPage() {
    hideAll();
    document.getElementById('form-sign-up').style.display = 'block';
};

async function register(ev) {
    ev.preventDefault();

    let { email, password, repeatPassword } = Object.fromEntries(new FormData(ev.currentTarget));

    if (email !== '' && password.length >= 6 && password === repeatPassword) {
        let userDetails = {email, password}
        await onRegister(userDetails);
    } else {
        alert('Invalid email or password');
    };
}