import { del } from "../api/api.js";
import page from '../../node_modules/page/page.mjs'

export async function showDelete(ctx){
    let id = ctx.params.id;
    await del(`data/shoes/${id}`);
    page.redirect('/dashboard');
}