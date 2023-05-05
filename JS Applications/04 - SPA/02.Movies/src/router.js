import { homePage } from "./views/home.js";
import { registerPage } from "./views/register.js";
import { loginPage } from "./views/login.js";
import { logout } from "./views/logout.js";
import { addMoviePage } from "./views/add-movie.js";

let allViews = Object.entries(document.querySelectorAll('.view-section'));

export let routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logout,
    '/add-movie': addMoviePage,
    '/register': registerPage
}

export function hideAll() {
    allViews.forEach(view => view[1].style.display = 'none');
}


