const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

router.get('/create', (req, res) => {

    res.render('./accessory/createAccessory');
});

router.post('/create', (req, res) => {
    const newAccessory = { ...req.body };

    accessoryManager.addAccessory(newAccessory)

    res.redirect('/');
});

router.get('/attach/:id', async (req, res) => {
    const cubeId = req.params.id;

    const cube = await cubeManager.getCube(cubeId).lean();
    const accessories = await accessoryManager.getAll().lean();

    console.log(cube);
    console.log(accessories);

    res.render('./accessory/attachAccessory', { cube, accessories });
})

module.exports = router;