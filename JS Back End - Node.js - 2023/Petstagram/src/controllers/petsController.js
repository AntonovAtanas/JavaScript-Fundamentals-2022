const router = require('express').Router();

const petManager = require('../managers/petsManager');

router.get('/catalog', (req, res) => {

    res.render('./pets/catalog');
})

router.get('/add', (req, res) => {
    res.render('./pets/create');
});

router.post('/add', async (req, res) => {
    const { name, age, description, location, image } = req.body;

    const ownerId = req.user._id;

    await petManager.addPet({ name, age, description, location, image, owner: ownerId });

    res.redirect('/pets/catalog');
})

module.exports = router