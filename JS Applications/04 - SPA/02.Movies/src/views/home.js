import { getToken, getMovies } from "../api-calls.js";
import { hideAll } from "../router.js";
import { showMovie } from "../app.js";

let homeView  = document.getElementById('home-page');
document.getElementById('movies-list').addEventListener('click', showMovie)

export function homePage() {
    hideAll();
    getToken();
    homeView.style.display = 'block';
    getMovies();
};