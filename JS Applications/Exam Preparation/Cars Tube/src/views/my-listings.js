import {html, render} from '../../node_modules/lit-html/lit-html.js'
import { get } from '../api/api.js';

import { showNavigation } from './navigation.js';

let main = document.querySelector('main');

function carsRender(data){
    let view = html`
            <section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">
                ${data.length === 0 
                ? html `<p class="no-cars"> You haven't listed any cars yet.</p>`
                : html `
                ${data.map(car => html `
                
                        <div class="listing">
                    <div class="preview">
                        <img src=${car.imageUrl}>
                    </div>
                    <h2>${car.brand} ${car.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${car.year}</h3>
                            <h3>Price: ${car.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href='${`/details/${car._id}`}' class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
                
                `)}
                `
                }
            </div>
        </section>
    `
        showNavigation()
        render(view, main);
}


export async function getMyCars(){
    let userId = sessionStorage.userId;

    let data = await get(`data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    carsRender(data);
}