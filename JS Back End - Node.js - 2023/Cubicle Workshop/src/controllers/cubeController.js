const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

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
        difficultyLevel: Number(difficultyLevel)
    });

    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await cubeManager.getCube(id).lean();
    const accessories = await accessoryManager.getAll().lean();
    
    res.render('details', { cube, accessories })
});

module.exports = router;