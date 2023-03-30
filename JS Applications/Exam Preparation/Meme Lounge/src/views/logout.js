import { logout } from "../api/auth.js";

export async function showLogout(){
    await logout();
}