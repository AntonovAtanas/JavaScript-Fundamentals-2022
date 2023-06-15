const router = require('express').Router();

const petManager = require('../managers/petsManager');
const { errorMessageHandler } = require('../utils/errorMessageHandler');

// Catalog
router.get('/catalog', async (req, res) => {

    const allPets = await petManager.getAllPets().lean();

    res.render('./pets/catalog', { allPets });
})
// Render add page
router.get('/add', (req, res) => {
    res.render('./pets/create');
});
// Add new pet
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
// Details
router.get('/details/:id', async (req, res) => {
    const petId = req.params.id;

    const foundPet = await petManager.getPet(petId).lean();
    console.log(foundPet)
    const isOwner = req.user?._id == foundPet.owner._id.toString();

    res.render('./pets/details', { foundPet, isOwner })
});
// Add comment
router.post('/details/:id/comment', async (req, res) => {
    const petId = req.params.id;
    const user = req.user._id
    const { comment } = req.body;

    try {
        await petManager.addComment(user, comment, petId);

        return res.redirect(`/pets/details/${petId}`)
    } catch (error) {
        console.log(error)
    }

    res.redirect(`/pets/details/${petId}`)
});

// Delete
router.get('/delete/:id', async (req, res) => {
    const petId = req.params.id;

    try {
        await petManager.deletePet(petId);
    } catch (error) {
        return res.render(`./pets/details/${petId}`, { errorMessage: errorMessageHandler(error) });
    }

    res.redirect('/pets/catalog');
});

// Render edit page

router.get('/edit/:id', async (req, res) => {
    const petId = req.params.id;

    const foundPet = await petManager.getPet(petId).lean();

    res.render('./pets/edit', { foundPet })
})

module.exports = router