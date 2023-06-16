const router = require('express').Router();

const homeController = require('./controllers/homeController');
const booksController = require('./controllers/booksController');
const userController = require('./controllers/userController');
const error404Controller = require('./controllers/error404Controller');

router.use(homeController);
router.use('/books', booksController)
router.use('/user', userController);
router.use('*', error404Controller);

module.exports = router;