import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { showNavigation } from './navigation.js';
import { showDashboard } from './dashboard.js';
import * as request from '../api/api.js'
import page from '../../node_modules/page/page.mjs';

let main = document.querySelector('main');

export function showCreate() {
    let create = html`
    <div id="register" class="container home wrapper  my-md-5 pl-md-5">
        <div id="add" class="container home wrapper  my-md-5 pl-md-5">
            <div class=" d-md-flex flex-mb-equal ">
                <div class="col-md-6">
                    <img class="responsive-ideas create" src="./images/creativity_painted_face.jpg" alt="">
                </div>
                <form class="form-idea col-md-5" action="#/create" method="post" @submit=${createHandler}>
                    <div class="text-center mb-4">
                        <h1 class="h3 mb-3 font-weight-normal">Share Your Idea</h1>
                    </div>
                    <div class="form-label-group">
                        <label for="ideaTitle">Title</label>
                        <input type="text" id="ideaTitle" name="title" class="form-control" placeholder="What is your idea?"
                            required="" autofocus="">
                    </div>
                    <div class="form-label-group">
                        <label for="ideaDescription">Description</label>
                        <textarea type="text" name="description" class="form-control" placeholder="Description"
                            required=""></textarea>
                    </div>
                    <div class="form-label-group">
                        <label for="inputURL">Add Image</label>
                        <input type="text" id="inputURL" name="imageURL" class="form-control" placeholder="Image URL"
                            required="">
    
                    </div>
                    <button class="btn btn-lg btn-dark btn-block" type="submit">Create</button>
    
                    <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2021.</p>
                </form>
            </div>
        </div>
    `;
    showNavigation()
    render(create, main);
}

function createHandler(e) {
    e.preventDefault();
    
    let { title, description, imageURL } = Object.fromEntries(new FormData(e.currentTarget));

    if (title.length >= 6 && description.length >= 10 && imageURL.length >= 5) {

        request.post('data/ideas', { title, description, img: imageURL });

        page.redirect('/dashboard')
    }
}

