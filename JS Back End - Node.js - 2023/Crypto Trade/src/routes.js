const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const cryptoController = require('./controllers/cryptoManager');
const error404Controller = require('./controllers/error404Controller');

router.use(homeController);
router.use('/user', userController);
router.use('/crypto', cryptoController);
router.use('*', error404Controller);

module.exports = router;