import page from '../node_modules/page/page.mjs';
import { createView } from './views/create.js';
import { getItems } from './views/dashboard.js';
import { deleteView } from './views/delete.js';
import { getDetails } from './views/details.js';
import { getEditItem } from './views/edit.js';
import { loginView } from './views/login.js';
import { logoutView } from './views/logout.js';
import { getMyPosts } from './views/my-posts.js';
import { registerView } from './views/register.js';

page('/', getItems); //Dashboard render
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/create', createView);
page('/details/:id', getDetails); //Item details render
page('/edit/:id', getEditItem);
page('/delete/:id', deleteView);
page('/my-posts', getMyPosts);

page.start()