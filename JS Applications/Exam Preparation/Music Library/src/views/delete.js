import { del } from "../api/api.js";
import page from '../../node_modules/page/page.mjs'

export async function deleteView(ctx){
    let id = ctx.params.id;
    await del(`data/albums/${id}`);
    page.redirect('/dashboard');
}