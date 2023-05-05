import { homePage } from "./home.js";

export function logout() {
    sessionStorage.clear();
    homePage();
}