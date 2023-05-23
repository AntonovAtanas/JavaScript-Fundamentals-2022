import { del } from "../api/api.js";
import page from '../../node_modules/page/page.mjs'

export async function deleteView(ctx){
    let id = ctx.params.id;
    if (confirm('Are you sure you want to delete this furniture?')) {
        
        await del(`data/posts/${id}`);
        page.redirect('/');
      }

}