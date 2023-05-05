import { hideAll, routes } from "./router.js";
import { homePage } from "./views/home.js";
import { getToken } from "./api-calls.js";
import { detailsPage } from "./views/details.js";

hideAll();
homePage();
getToken();

document.querySelector('nav').addEventListener('click', navigation);
document.getElementById('add-movie-button').addEventListener('click', navigation);

export function navigation(event) {
    if (event.target.tagName === 'A' && event.target.href) {
        event.preventDefault();
        let url = new URL(event.target);
        let view = routes[url.pathname];
        if (typeof view === 'function') {
            view();
        }
    }
};

export function showMovie(event){
    if(event.target.tagName === 'BUTTON'){
        event.preventDefault();
        let id = event.target.dataset.id;
        detailsPage(id)
    }
}