import page from '../node_modules/page/page.mjs';

import { showGames } from './views/all-games.js';
import { showCreate } from './views/create.js';
import { showDelete } from './views/delete.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showLogout } from './views/logout.js';
import { showRegister } from './views/register.js';

page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/logout', showLogout);
page('/all-games', showGames);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/delete/:id', showDelete);
page('/edit/:id', showEdit)

page.start();