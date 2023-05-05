import { hideAll } from "../router.js";
import { addMovie } from "../api-calls.js";
import { homePage } from "./home.js";

const moviePage = document.getElementById('add-movie');
let form = document.getElementById('add-movie-form');
form.addEventListener('submit', addMovieForm)

export function addMoviePage() {
    hideAll();
    moviePage.style.display = 'block';
};

async function addMovieForm(event) {
    event.preventDefault();

    let { title, description, img } = Object.fromEntries(new FormData(event.currentTarget));

    if (title == '' || description == '' || img == '') {
        alert('Please fill all fields')
    } else {
        await addMovie(title, description, img);
        homePage();
        form.reset(); // edge?
    }
}