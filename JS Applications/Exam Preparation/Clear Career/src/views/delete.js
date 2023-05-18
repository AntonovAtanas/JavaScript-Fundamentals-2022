import { del } from "../api/api.js";
import page from '../../node_modules/page/page.mjs'

export async function onDelete(ctx){
    
    if (confirm('Are you sure you want to delete this furniture?')) {
        
        await del(`data/offers/${ctx.params.jobId}`);
        page.redirect('/dashboard');
      }
}