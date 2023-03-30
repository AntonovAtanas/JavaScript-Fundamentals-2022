import { html, render } from '../../node_modules/lit-html/lit-html.js';
import {isAuthenticated} from '../api/auth.js'

let nav = document.querySelector('nav');

export function showNavigation(){
    let view = html `
    <a href="/all-memes">All Memes</a>
    ${isAuthenticated() 
    ? html`
    <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${sessionStorage.email}</span>
                    <a href="/profile">My Profile</a>
                    <a href="/logout">Logout</a>
                </div>
            </div>
    `
    : html `
                <div class="guest">
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/">Home Page</a>
            </div>
    `
    }
    `
    render(view, nav);
}