import { hideAll } from "../router.js";
import { loadMovieData, fillMovieData } from "../api-calls.js";
import { detailsPage } from "./details.js";

let editPage = document.getElementById('edit-movie');

let form = document.querySelector('#edit-movie form');
form.addEventListener('submit', onEdit)

let title = form.querySelector('#title');
let description = form.querySelector('textarea');
let image = form.querySelector('#imageUrl');

let movieID;

export async function editMovie(event){
    hideAll();
    editPage.style.display = 'block';
    movieID = event.target.parentElement.getAttribute('data-id');
    let data = await loadMovieData(movieID);

    title.value = data.title;
    description.textContent = data.description;
    image.value = data.img;
}

async function onEdit(e){
    e.preventDefault()
    let {title, description, img} = Object.fromEntries(new FormData(e.currentTarget));
    // edge if a field is empty
    await fillMovieData({title, description, img}, movieID);
    detailsPage(movieID);
}

