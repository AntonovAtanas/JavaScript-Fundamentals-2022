const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');
const error404 = require('./controllers/404');

router.use(homeController);
router.use('/cube', cubeController);
router.use('/create', accessoryController);
router.use('*', error404);

module.exports = router;