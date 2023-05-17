import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { showNavigation } from './navigation.js';
import { get } from '../api/api.js';

let main = document.querySelector('main');

async function listingsView(data) {

    let view = html`
    <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                ${data.length === 0 
                ? html `<p class="no-cars">No cars in database.</p>`
                :
                html` ${data.map(listing => html`
                <div class="listing">
                    <div class="preview">
                        <img src=${listing.imageUrl}>
                    </div>
                    <h2>${listing.brand} ${listing.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${listing.year}</h3>
                            <h3>Price: ${listing.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href=${`/details/${listing._id}`} class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
                `)}
                `       
            }
            </div>
        </section>
    `;

    showNavigation()
    render(view, main);
}

export async function getListings() {
    let data = await get('data/cars?sortBy=_createdOn%20desc');
    listingsView(data);
}