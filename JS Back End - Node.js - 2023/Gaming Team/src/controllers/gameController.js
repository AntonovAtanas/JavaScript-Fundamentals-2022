const router = require('express').Router();

const gameManager = require('../managers/gameManager')

router.get('/create', (req, res) => {
    res.render('./games/create');
})

router.post('/create', async(req, res) => {
    const gameDetails = req.body;
    const userId = req.user?._id

    try {
        await gameManager.addGame({...gameDetails, owner: userId})
    } catch (error) {
        console.log(error)
    }

    res.redirect('/')
})

module.exports = router;