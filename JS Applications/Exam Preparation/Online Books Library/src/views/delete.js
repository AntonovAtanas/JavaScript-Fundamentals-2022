import { del } from "../api/api.js";
import page from '../../node_modules/page/page.mjs'

export async function deleteBook(ctx) {
    let id = ctx.params.id;

    if (confirm('Are you sure you want to delete this book?')) {
        await del(`data/books/${id}`);
        page.redirect('/');
    }

}