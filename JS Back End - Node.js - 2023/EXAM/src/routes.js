const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const animalController = require('./controllers/animalController');
const error404Controller = require('./controllers/error404Controller');

router.use(homeController);
router.use('/user', userController);
router.use('/animals', animalController)
router.use('*', error404Controller);

module.exports = router;