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

router.get('/details/:id', async (req, res) => {
    const gameId = req.params.id;

    try {
        const foundGame = await gameManager.getGame(gameId).lean();
        const isOwner = foundGame.owner == req.user?._id;
        

        res.render('./games/details', { foundGame, isOwner })
    } catch (error) {
        return res.render('./games/catalog', { errorMessage: errorMessageHandler(error) })
    }
});

router.get('/buy/:id', async(req, res) => {
    const gameId = req.params.id;
    const userId = req.user?._id;

    try {
        await gameManager.buyGame(gameId, userId);

        res.redirect(`/games/details/${gameId}`)
    } catch (error) {
        return res.render(`./games/details/${gameId}`, { errorMessage: errorMessageHandler(error) })
    }   
})


module.exports = router;