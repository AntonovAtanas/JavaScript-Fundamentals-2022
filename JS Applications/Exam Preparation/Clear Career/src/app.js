import page from '../node_modules/page/page.mjs';

import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { logoutView } from './views/logout.js';
import { dashboardView } from './views/dashboard.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { onDelete } from './views/delete.js';


page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/details/:jobId', detailsView);
page('/edit/:jobId', editView);
page('/delete/:jobId', onDelete)

page.start()