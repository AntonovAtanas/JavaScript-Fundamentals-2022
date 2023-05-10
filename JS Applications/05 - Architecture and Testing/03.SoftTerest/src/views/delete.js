import * as requester from '../api/api.js'
import page from '../../node_modules/page/page.mjs';

export async function deleteIdea(ctx){
    let id = ctx.params.ideaId;

    requester.del(`data/ideas/${id}`);
    page.redirect('/dashboard');
}