import { logout } from "../api/auth.js";
import page from '../../node_modules/page/page.mjs';

export function onLogout (){
    logout()
    page.redirect('/');
}