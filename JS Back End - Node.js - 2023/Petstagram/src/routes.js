const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const petsController = require('./controllers/petsController');
const error404Controller = require('./controllers/error404Controller');

router.use(homeController);
router.use('/user', userController);
router.use(petsController);
router.use('*', error404Controller);

module.exports = router;