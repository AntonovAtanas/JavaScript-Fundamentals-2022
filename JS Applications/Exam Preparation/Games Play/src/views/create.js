import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'
import { post } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

export function showCreate() {
    let view = html`
            <section id="create-page" class="auth">
                <form id="create" @submit=${onCreate}>
                    <div class="container">
            
                        <h1>Create Game</h1>
                        <label for="leg-title">Legendary title:</label>
                        <input type="text" id="title" name="title" placeholder="Enter game title...">
            
                        <label for="category">Category:</label>
                        <input type="text" id="category" name="category" placeholder="Enter game category...">
            
                        <label for="levels">MaxLevel:</label>
                        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">
            
                        <label for="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">
            
                        <label for="summary">Summary:</label>
                        <textarea name="summary" id="summary"></textarea>
                        <input class="btn submit" type="submit" value="Create Game">
                    </div>
                </form>
            </section>
    `

    showNavigation();
    render(view, main);
}

async function onCreate(e) {
    e.preventDefault();

    let { title, category, maxLevel, imageUrl, summary } = Object.fromEntries(new FormData(e.currentTarget));

    if (title !== '' && category !== '' && maxLevel !== '' && imageUrl !== '' && summary !== '') {
        await post('data/games', { title, category, maxLevel, imageUrl, summary });
        page.redirect('/')
    }
}

