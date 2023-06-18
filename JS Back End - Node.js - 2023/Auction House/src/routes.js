const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const auctionController = require('./controllers/auctionController');
const error404Controller = require('./controllers/error404Controller');

router.use(homeController);
router.use('/user', userController);
router.use('/auction', auctionController);
router.use('*', error404Controller);

module.exports = router;