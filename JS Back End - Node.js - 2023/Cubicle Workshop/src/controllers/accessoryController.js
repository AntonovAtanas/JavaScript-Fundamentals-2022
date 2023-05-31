const router = require('express').Router();

const accessoryManager = require('../managers/accessoryManager');

router.get('/create', (req, res) => {

    res.render('./accessory/createAccessory');
});

router.post('/create', (req, res) => {
    const newAccessory = {...req.body};

    accessoryManager.addAccessory(newAccessory)

    res.redirect('/');
});

module.exports = router;