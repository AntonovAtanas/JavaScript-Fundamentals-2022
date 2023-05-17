import page from '../node_modules/page/page.mjs';


import { createView } from './views/create.js';
import { onDelete } from './views/delete.js';
import { getCar } from './views/details.js';
import { getEdit } from './views/edit.js';
import { homeView } from './views/home.js';
import { getListings } from './views/listings.js';
import { loginView } from './views/login.js';
import { logoutView } from './views/logout.js';
import { getMyCars } from './views/my-listings.js';
import { registerView } from './views/register.js';
import { searchView } from './views/search.js';


page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/listings', getListings);
page('/details/:id', getCar);
page('/create', createView);
page('/edit/:id', getEdit);
page('/delete/:id', onDelete);
page('/my-listings', getMyCars);
page('/year', searchView)


page.start();