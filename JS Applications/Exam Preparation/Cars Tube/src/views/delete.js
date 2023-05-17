import { del } from "../api/api.js";
import page from '../../node_modules/page/page.mjs'

export async function onDelete(ctx){
    let id = ctx.params.id;
    await del(`data/cars/${id}`);
    page.redirect('/listings');
}