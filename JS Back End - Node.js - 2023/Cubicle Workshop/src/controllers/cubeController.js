const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

const { isAuth } = require('../middlewares/authMiddleware');
const { optionsGenerator } = require('../utils/optionsGenerator');
const { errorMessageHandler } = require('../utils/errorMessageHandler');

router.get('/add', isAuth, (req, res) => {
    res.render('./cube/create');
});

router.post('/add', isAuth, async (req, res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel
    } = req.body;

    try {
        await cubeManager.add({
            name,
            description,
            imageUrl,
            difficultyLevel: Number(difficultyLevel),
            creatorId: req.user._id
        });
    } catch (error) {
        return res.render('./cube/create', errorMessageHandler(error))
    }

    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user?._id

    let cube

    try {
        cube = await cubeManager.getCube(id).lean();
    } catch (error) {
        return res.redirect('/404');
    }

    const isCreator = userId === cube.creatorId.toString();

    const hasAccessories = cube.accessories.length > 0;
    res.render('./cube/details', { cube, hasAccessories, isCreator })
});

router.get('/attach/:id', isAuth, async (req, res) => {
    const cubeId = req.params.id;
    let cube
    let accessories

    try {
        cube = await cubeManager.getCube(cubeId).lean();
        accessories = await accessoryManager.getAll().lean();
    } catch (error) {
        return res.redirect('/404')
    }

    const hasAccessories = accessories.length > 0;

    res.render('./accessory/attachAccessory', { cube, accessories, hasAccessories });
});

router.post('/attach/:id', isAuth, async (req, res) => {
    const cubeId = req.params.id;
    const accessoryId = req.body.accessory;

    try {
        await cubeManager.attachAccessory(cubeId, accessoryId);
    } catch (error) {
        return res.redirect('/404');
    }
    res.redirect('/')
});

router.get('/edit/:id', isAuth, async (req, res) => {

    let cube;

    try {
        cube = await cubeManager.getCube(req.params.id).lean();
    } catch (error) {
        return res.redirect('/404');
    }

    let options = optionsGenerator(cube.difficultyLevel)

    res.render('./cube/editCube', { cube, options })
});

router.post('/edit/:id', isAuth, async (req, res) => {
    const cubeId = req.params.id;
    const cubeData = req.body;

    try {
        await cubeManager.updateCube(cubeId, cubeData);
    } catch (error) {
        return res.redirect('/404');
    }

    res.redirect(`/cube/details/${cubeId}`);
});

router.get('/delete/:id', isAuth, async (req, res) => {
    let cube;

    try {
        cube = await cubeManager.getCube(req.params.id).lean();
    } catch (error) {
        return res.status(404).redirect('/404')
    }

    const options = optionsGenerator(cube.difficultyLevel);

    res.render('./cube/deleteCube', { cube, options });
});

router.post('/delete/:id', isAuth, async (req, res) => {
    const cubeId = req.params.id;

    try {
        await cubeManager.deleteCube(cubeId);
    } catch (error) {
        return res.redirect('/404')
    }

    res.redirect('/')
})

module.exports = router;