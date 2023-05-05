import { homePage } from "./views/home.js";
import { editMovie } from "./views/edit-movie.js";

let guestViews = Object.entries(document.querySelectorAll('.guest'));
let loggedViews = Object.entries(document.querySelectorAll('.user'));
let welcomeMsg = document.getElementById('welcome-msg');
let movieList = document.getElementById('movies-list');
let movieDetailsContainer = document.getElementById('movie-example');

const registerURL = 'http://localhost:3030/users/register';
const loginURL = 'http://localhost:3030/users/login';
const moviesURL = 'http://localhost:3030/data/movies';

export async function onRegister(userDetails) {

    try {
        let response = await fetch(registerURL, {
            method: 'POST',
            headers: {
                'content-type': 'applicaton/json'
            },
            body: JSON.stringify(userDetails)
        })

        if (response.status !== 200) {
            throw new Error('Error registering the user!')
        };

        let data = await response.json();

        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('_id', data._id);
        homePage();

    } catch (error) {
        console.log(error)
    }
}

export async function onLogin(email, password) {

    try {
        let response = await fetch(loginURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if (!response.ok) {
            let data = await response.json();
            throw new Error(data.message)
        }

        let data = await response.json();
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('_id', data._id);

        homePage();

    } catch (error) {
        alert('Error logging in')
    }
}

export function getToken() {
    if (sessionStorage.accessToken) {
        guestViews.forEach(view => view[1].style.display = 'none');
        loggedViews.forEach(view => view[1].style.display = '');
        welcomeMsg.textContent = `Welcome, ${sessionStorage.email}`;
    } else {
        loggedViews.forEach(view => view[1].style.display = 'none');
        guestViews.forEach(view => view[1].style.display = '');
    }
}

export async function getMovies() {
    movieList.innerHTML = ''; // clear all movies
    try {
        let response = await fetch(moviesURL)

        if (response.status !== 200) {
            throw new Error('Error getting movies')
        };

        let data = await response.json();

        data.forEach(movie => {
            movieList.innerHTML += `<li class="card mb-4">
            <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
            <div class="card-body">
                <h4 class="card-title">${movie.title}</h4>
            </div>
            <div class="card-footer">
                <a href="/details${movie._id}"> 
                    <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
                </a>
            </div>

        </li>`
            // _ownerID?
        });

    } catch (error) {
        console.log(error)
    }
}

export async function addMovie(title, description, img) {

    let response = await fetch(moviesURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': sessionStorage.accessToken
        },
        body: JSON.stringify({ title, description, img })
    });

}

export async function movieDetails(id) {
    let response = await fetch(`${moviesURL}/${id}`);

    if (!response.ok) {
        let data = response.json();
        console.log(data.message)
        throw new Error('Error getting movie details')
    };

    let data = await response.json();
    await movieDetailsRender(data);
}

async function movieDetailsRender(data) {

    movieDetailsContainer.innerHTML = `<div class="container">
    <div class="row bg-light text-dark">
      <h1>${data.title}</h1>

      <div class="col-md-8">
        <img
          class="img-thumbnail"
          src="${data.img}"
          alt="Movie"
        />
      </div>
      <div class="col-md-4 text-center" data-id="${data._id}">
        <h3 class="my-3">Movie Description</h3>
        <p>${data.description}</p>
        <a class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="#">Edit</a>
        <a id="like" class="btn btn-primary" href="#">Like</a>
        <span id="likeCounter" class="enrolled-span">Liked 1</span>
      </div>
    </div>
  </div>`

    let deleteBtn = movieDetailsContainer.querySelector('.btn-danger');
    deleteBtn.addEventListener('click', deleteMovie);

    let editBtn = movieDetailsContainer.querySelector('.btn-warning');
    editBtn.addEventListener('click', editMovie);

    let likeCounter = document.getElementById('likeCounter');
    likeCounter.textContent = `Liked ${await getLikes(data._id)}`

    let likeBtn = document.getElementById('like');
    likeBtn.addEventListener('click', async () => {
        let token = sessionStorage.getItem('accessToken');

        if (token) {
            await fetch('http://localhost:3030/data/likes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': token
                },
                body: JSON.stringify({ movieId: data._id })
            })
        }
        movieDetailsRender(data);
    })

    if (sessionStorage._id !== data._ownerId) { // if error in judge try not to hide/show but to create elements
        
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';
        
        let likesInfo = await getUserLike(data._id, sessionStorage._id)

        for (const like of likesInfo) {
            if (like._ownerId === sessionStorage._id) {
                likeBtn.style.display = 'none';
            }
        }

    } else {
        // the user is the owner
        deleteBtn.style.display = 'inline-block';
        editBtn.style.display = 'inline-block';
        likeBtn.style.display = 'none';
    }

    if (!sessionStorage._id) {
        likeBtn.style.display = 'none';
    }
}

async function getLikes(movieId) {
    let response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count `);
    let data = await response.json();
    return data;
}

async function getUserLike(movieId, userId) {
    let response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
    let data = await response.json();
    return data;
}

async function deleteMovie(event) {
    let id = event.currentTarget.parentElement.getAttribute('data-id');
    let token = sessionStorage.getItem('accessToken');
    await fetch(`${moviesURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': token
        }
    });

    homePage();
}

export async function loadMovieData(id) {
    let response = await fetch(`${moviesURL}/${id}`);

    if (!response.ok) {
        throw new Error(response.json().message)
    };

    let data = await response.json();
    return data;
}

export async function fillMovieData(data, id) {

    let token = sessionStorage.accessToken;

    await fetch(`${moviesURL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    })
}