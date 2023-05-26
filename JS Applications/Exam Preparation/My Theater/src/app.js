import page from '../node_modules/page/page.mjs';
import { showCreate } from './views/create.js';
import { showDelete } from './views/delete.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showLogout } from './views/logout.js';
import { showProfile } from './views/profile.js';
import { showRegister } from './views/register.js';

page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/logout', showLogout);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/delete/:id', showDelete);
page('/profile', showProfile)


page.start();