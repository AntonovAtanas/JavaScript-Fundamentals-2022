const router = require('express').Router();

const petManager = require('../managers/petsManager');
const { errorMessageHandler } = require('../utils/errorMessageHandler');

router.get('/catalog', async (req, res) => {

    const allPets = await petManager.getAllPets().lean();

    const hasPets = allPets.length > 0;

    res.render('./pets/catalog', { hasPets, allPets });
})

router.get('/add', (req, res) => {
    res.render('./pets/create');
});

router.post('/add', async (req, res) => {
    const { name, age, description, location, image } = req.body;

    const ownerId = req.user._id;

    try {
        await petManager.addPet({ name, age, description, location, image, owner: ownerId });
    } catch (error) {
        return res.render('./pets/create', { errorMessage: errorMessageHandler(error) });
    }

    res.redirect('/pets/catalog');
});

router.get('/details/:id', async (req, res) => {
    const petId = req.params.id;

    const foundPet = await petManager.getPet(petId).lean();

    const isOwner = req.user?._id == foundPet.owner._id.toString();

    res.render('./pets/details', { foundPet, isOwner })
})

module.exports = router