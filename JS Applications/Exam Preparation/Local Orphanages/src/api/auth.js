import page from '../../node_modules/page/page.mjs'

import * as api from './api.js'

export async function login(email, password){
    let user = await api.post('users/login', {email, password});
    
    sessionStorage.setItem('accessToken', user.accessToken);
    sessionStorage.setItem('userId', user._id);

    page.redirect('/');
};

export async function register(email, password){
    let user = await api.post('users/register', {email, password});

    sessionStorage.setItem('accessToken', user.accessToken);
    sessionStorage.setItem('userId', user._id);

    page.redirect('/');
};

export async function logout(){
    
    api.get('users/logout');
    sessionStorage.clear();

    page.redirect('/');
};

export function isAuthenticated (){
    return Boolean(sessionStorage.accessToken)
}