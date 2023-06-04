import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function showHome() {
    let view = html`
            <section id="home">
                <h1>Learn more about your favorite fruits</h1>
                <img src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png" alt="home" />
            </section>
    `
    showNavigation();
    render(view, main);
}   