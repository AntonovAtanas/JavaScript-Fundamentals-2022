const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');

router.get('/add', (req, res) => {
    res.render('create');
});

router.post('/add', async (req, res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel
    } = req.body;

    await cubeManager.add({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel)
    });

    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await cubeManager.getCube(id).lean();

    res.render('details', { cube })
});

module.exports = router;