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

    const hasAccessories = cube.accessories.length > 0;

    res.render('details', { cube, hasAccessories })
});

router.get('/attach/:id', async (req, res) => {
    const cubeId = req.params.id;

    const cube = await cubeManager.getCube(cubeId).lean();
    const accessories = await accessoryManager.getAll().lean();

    const hasAccessories = accessories.length > 0;

    res.render('./accessory/attachAccessory', { cube, accessories, hasAccessories });
});

router.post('/attach/:id', (req, res) => {
    const cubeId = req.params.id;
    const accessoryId = req.body.accessory;

    cubeManager.attachAccessory(cubeId, accessoryId);

    res.redirect('/')
})

module.exports = router;