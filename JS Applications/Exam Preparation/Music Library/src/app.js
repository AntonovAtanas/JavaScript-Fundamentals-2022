import page from '../node_modules/page/page.mjs';

import { addView } from './views/add.js';
import { dashboardView } from './views/dashboard.js';
import { deleteView } from './views/delete.js';
import { getDetails } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { logoutView } from './views/logout.js';
import { registerView } from './views/register.js';


page('/', homeView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);
page('/dashboard', dashboardView);
page('/add', addView);
page('/details/:id', getDetails);
page('/edit/:id', editView);
page('/delete/:id', deleteView)

page.start()