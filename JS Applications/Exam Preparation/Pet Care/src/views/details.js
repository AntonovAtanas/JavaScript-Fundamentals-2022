import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js'
import { showNavigation } from './navigation.js';
import { get, post } from '../api/api.js';

let main = document.querySelector('main');

let id;

async function detailsRender(data) {
    let view = html`
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src=${data.image}>
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${data.name}</h1>
                    <h3>Breed: ${data.breed}</h3>
                    <h4>Age: ${data.age}</h4>
                    <h4>Weight: ${data.weight}</h4>
                    <h4 class="donation">Donation: ${await getDonations()}$</h4>
                </div>
                ${sessionStorage.userId === data._ownerId 
                ? html `
                <div class="actionBtn">
                    <a href=${`/edit/${id}`} class="edit">Edit</a>
                    <a href=${`/delete/${id}`} class="remove">Delete</a>
                </div>
                `
                : nothing
                }
                ${sessionStorage.userId !== data._ownerId && await hasDonated() === 0
                ? html `
                <div class="actionBtn">
                    <a href="" class="donate" @click=${onDonate}>Donate</a>
                </div>
                `
                :
                nothing
                }
                
            </div>
        </div>
    </section>
    `

    showNavigation();
    render(view, main);
}

export async function showDetails(ctx) {
    id = ctx.params.id
    let data = await get(`data/pets/${id}`);
    detailsRender(data);
}

async function onDonate(){
    await post('data/donation', {petId: id});
}

async function getDonations(){
    return await get(`data/donation?where=petId%3D%22$${id}%22&distinct=_ownerId&count`) * 100
}

async function hasDonated(){
    return await get(`data/donation?where=petId%3D%22${id}%22%20and%20_ownerId%3D%22${sessionStorage.userId}%22&count`)
}