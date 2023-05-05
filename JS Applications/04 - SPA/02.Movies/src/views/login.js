import { hideAll } from "../router.js";
import { onLogin } from "../api-calls.js";

let formLogin = document.getElementById('login-form');
formLogin.addEventListener('submit', login)

let loginView = document.getElementById('form-login');

export function loginPage() {
    hideAll();
    loginView.style.display = 'block';
};

async function login(ev) {
    ev.preventDefault();
    let { email, password } = Object.fromEntries(new FormData(ev.currentTarget));
    formLogin.reset(); // edge?
    await onLogin(email, password);
}