import { logout } from '../api/auth.js';

export async function logoutView(){
    logout()
}