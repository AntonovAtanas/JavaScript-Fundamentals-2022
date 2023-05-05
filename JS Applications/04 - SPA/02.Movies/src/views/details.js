import { hideAll } from "../router.js";
import { movieDetails } from "../api-calls.js";

let detailsSection = document.getElementById('movie-example')

export async function detailsPage(id) {
    hideAll();
    detailsSection.style.display = 'block';
    await movieDetails(id);
};