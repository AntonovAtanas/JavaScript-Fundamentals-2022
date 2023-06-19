const router = require('express').Router();

const animalManager = require('../managers/animalManager');

const { errorMessageHandler } = require('../utils/errorMessageHandler');

router.get('/', async (req, res) => {
    try {
        let lastThree = await animalManager.findLastThree();
        lastThree = lastThree.slice(0, 3);
        res.render('home', { lastThree });
    } catch (error) {
        console.log(error)
        return res.render('./home', { errorMessage: errorMessageHandler(error) })
    }
});

module.exports = router;