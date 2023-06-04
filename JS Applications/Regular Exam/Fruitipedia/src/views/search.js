import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api/api.js';
import { showNavigation } from './navigation.js';

let main = document.querySelector('main')

export function showSearch() {
    let view = html`
        <section id="search">
        
            <div class="form">
                <h2>Search</h2>
                <form class="search-form" @submit=${onSearch}>
                    <input type="text" name="search" id="search-input" />
                    <button class="button-list">Search</button>
                </form>
            </div>
            <h4>Results:</h4>
            <div class="search-result">
        
            </div>
        </section>
    `

    showNavigation();
    render(view, main);
};

async function onSearch(e) {
    e.preventDefault();

    let { search } = Object.fromEntries(new FormData(e.currentTarget));

    if (search !== '') {
        let result = await get(`data/fruits?where=name%20LIKE%20%22${search}%22`);
        resultRender(result);
    } else {
        alert('Please enter valid search text')
    }
}

function resultRender(result){
    let container = document.querySelector('.search-result');
    
    let view = html `
    ${result.length === 0 
    ? html `
    <p class="no-result">No result.</p>

    `
    : html `
    ${result.map(res => html `
                    <!--If there are matches display a div with information about every fruit-->
                    <div class="fruit">
                    <img src=${res.imageUrl} alt="example1" />
                    <h3 class="title">${res.name}</h3>
                    <p class="description">${res.description}</p>
                    <a class="details-btn" href=${`/details/${res._id}`}>More Info</a>
                </div>
    `)}
    `
    }
    `;

    render(view, container)
}