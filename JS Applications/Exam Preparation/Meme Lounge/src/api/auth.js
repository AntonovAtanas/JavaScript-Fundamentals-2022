import page from '../../node_modules/page/page.mjs'

import * as api from './api.js'

export async function login(email, password){
    let user = await api.post('users/login', {email, password});
    
    sessionStorage.setItem('accessToken', user.accessToken);
    sessionStorage.setItem('userId', user._id);
    sessionStorage.setItem('username', user.username);
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('gender', user.gender);

    page.redirect('/all-memes');
};

export async function register(username, email, password, gender){
    let user = await api.post('users/register', {username, email, password, gender});

    sessionStorage.setItem('accessToken', user.accessToken);
    sessionStorage.setItem('userId', user._id);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('gender', gender);

    page.redirect('/all-memes');
};

export async function logout(){
    
    api.get('users/logout');
    sessionStorage.clear();

    page.redirect('/');
};

export function isAuthenticated (){
    return Boolean(sessionStorage.accessToken)
}