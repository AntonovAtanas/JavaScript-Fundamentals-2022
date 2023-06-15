const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const gameController = require('./controllers/gameController');
const error404Controller = require('./controllers/error404Controller');

router.use(homeController);
router.use('/user', userController);
router.use('/games', gameController);
router.use('*', error404Controller);

module.exports = router;