import page from '../../node_modules/page/page.mjs';

import { logout } from "../api/auth.js";

export async function showLogout(){
    logout();
    page.redirect('/');
}