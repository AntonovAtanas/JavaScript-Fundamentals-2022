import page from '../../node_modules/page/page.mjs'

import * as api from './api.js'

export async function login(username, password){
    let user = await api.post('users/login', {username, password});
    
    sessionStorage.setItem('accessToken', user.accessToken);
    sessionStorage.setItem('userId', user._id);
    sessionStorage.setItem('username', username);

    page.redirect('/listings');
};

export async function register(username, password){
    let user = await api.post('users/register', {username, password});

    sessionStorage.setItem('accessToken', user.accessToken);
    sessionStorage.setItem('userId', user._id);
    sessionStorage.setItem('username', username);

    page.redirect('/listings');
};

export async function logout(){
    
    api.get('users/logout');
    sessionStorage.clear();

    page.redirect('/');
};

export function isAuthenticated (){
    return Boolean(sessionStorage.accessToken)
}