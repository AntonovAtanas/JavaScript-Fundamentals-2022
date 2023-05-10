import page from '../node_modules/page/page.mjs';

import { onLogout } from './views/logout.js';
import { showCreate } from './views/create.js';
import { showDashboard } from './views/dashboard.js';
import { showHome } from "./views/home.js"
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { getMovie } from './views/details.js';
import { deleteIdea } from './views/delete.js';


page('/', showHome)
page('/home', showHome)
page('/register', showRegister)
page('/login', showLogin)
page('/create', showCreate)
page('/dashboard', showDashboard)
page('/logout', onLogout)
page('/details/:idea', getMovie)
page('/delete/:ideaId', deleteIdea)

page.start()