const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');

router.get('/add', (req, res) => {
    res.render('create');
});

router.post('/add', (req, res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel
    } = req.body;

    cubeManager.add({
        name,
        description,
        imageUrl,
        difficultyLevel
    });

    res.redirect('/');
});

router.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const cube = cubeManager.getCube(id);

    res.render('details', { cube })
});

module.exports = router;