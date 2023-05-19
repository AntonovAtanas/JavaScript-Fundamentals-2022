import { del } from "../api/api.js";
import page from '../../node_modules/page/page.mjs'

export async function showDelete(ctx){
    let id = ctx.params.id;

    confirm('Are you sure you want to delete it?');

    if(confirm){
        await del(`data/games/${id}`);
        page.redirect('/')
    }

}