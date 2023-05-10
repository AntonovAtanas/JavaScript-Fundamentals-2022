import page from '../../node_modules/page/page.mjs'

import * as api from './api.js'

export async function login(email, password){
    let user = await api.post('users/login', {email, password});
    
    localStorage.setItem('accessToken', user.accessToken);
    localStorage.setItem('userId', user._id);

    page.redirect('/');
};

export async function register(email, password){
    let user = await api.post('users/register', {email, password});

    localStorage.setItem('accessToken', user.accessToken);
    localStorage.setItem('userId', user._id);

    page.redirect('/');
};

export async function logout(){
    api.get('users/logout');
    localStorage.clear();

    page.redirect('/');
};

export function isAuthenticated (){
    return Boolean(localStorage.accessToken)
}