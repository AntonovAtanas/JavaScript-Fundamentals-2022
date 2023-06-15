const router = require('express').Router();

const gameManager = require('../managers/gameManager');
const { errorMessageHandler } = require('../utils/errorMessageHandler')

router.get('/catalog', async (req, res) => {

    try {
        const allGames = await gameManager.allGames().lean();
        res.render('./games/catalog', { allGames });
    } catch (error) {
        return res.render('./games/catalog', { errorMessage: errorMessageHandler(error) })
    }
})

router.get('/create', (req, res) => {
    res.render('./games/create');
})

router.post('/create', async (req, res) => {
    const gameDetails = req.body;
    const userId = req.user?._id

    try {
        await gameManager.addGame({ ...gameDetails, owner: userId })
    } catch (error) {
        return res.render('./games/create', { errorMessage: errorMessageHandler(error) })
    }

    res.redirect('/games/catalog')
})

module.exports = router;