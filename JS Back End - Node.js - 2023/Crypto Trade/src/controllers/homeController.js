const router = require('express').Router();

const cryptoManager = require('../managers/cryptoManager');

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/search', async (req, res) => {
    const cryptoResult = await cryptoManager.allCrypto().lean();

    res.render('search', { cryptoResult })
})

router.post('/search', async (req, res) => {
    const { name, payment } = req.body;

    const cryptoResult = await cryptoManager.searchCrypto(name, payment)

    res.render('search', { cryptoResult })
})

module.exports = router;