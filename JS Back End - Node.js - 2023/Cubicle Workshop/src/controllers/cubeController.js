const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');
const { optionsGenerator } = require('../utils/optionsGenerator');

router.get('/add', (req, res) => {
    res.render('./cube/create');
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
        difficultyLevel: Number(difficultyLevel),
        creatorId: req.user._id
    });

    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user?._id

    const cube = await cubeManager.getCube(id).lean();

    const isCreator = userId === cube.creatorId.toString();

    const hasAccessories = cube.accessories.length > 0;
    res.render('./cube/details', { cube, hasAccessories, isCreator })
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
});

router.get('/edit/:id', async (req, res) => {
    const cube = await cubeManager.getCube(req.params.id).lean();

    let options = optionsGenerator(cube.difficultyLevel)

    res.render('./cube/editCube', { cube, options })
});

router.post('/edit/:id', (req, res) => {
    const cubeId = req.params.id;

    const cubeData = req.body;

    cubeManager.updateCube(cubeId, cubeData);

    res.redirect(`/cube/details/${cubeId}`);
});

router.get('/delete/:id', async (req, res) => {
    const cube = await cubeManager.getCube(req.params.id).lean();

    const options = optionsGenerator(cube.difficultyLevel);

    res.render('./cube/deleteCube', { cube, options });
});

router.post('/delete/:id', (req, res) => {
    const cubeId = req.params.id;

    cubeManager.deleteCube(cubeId);

    res.redirect('/')
})

module.exports = router;