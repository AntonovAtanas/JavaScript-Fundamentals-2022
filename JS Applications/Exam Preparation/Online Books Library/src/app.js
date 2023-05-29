import page from '../node_modules/page/page.mjs';
import { showAdd } from './views/add.js';

import { getBooks } from './views/dashboard.js';
import { deleteBook } from './views/delete.js';
import { bookDetails } from './views/details.js';
import { editView } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showLogout } from './views/logout.js';
import { myBooks } from './views/my-books.js';
import { showRegister } from './views/register.js';

page('/', getBooks);
page('/login', showLogin);
page('/logout', showLogout);
page('/register', showRegister);
page('/add', showAdd)
page('/book/:id', bookDetails);
page('/edit/:id', editView);
page('/delete/:id', deleteBook);
page('/my-books', myBooks)

page.start();