const router = require('express').Router();

const animalManager = require('../managers/animalManager');

const { errorMessageHandler } = require('../utils/errorMessageHandler');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/catalog', async (req, res) => {

    try {
        const allAnimals = await animalManager.getAll().lean();
        res.render('./animals/catalog', { allAnimals });
    } catch (error) {
        return res.render('./animals/catalog', { errorMessage: errorMessageHandler(error) })
    }
});

// Render create page
router.get('/create', isAuth, (req, res) => {
    res.render('./animals/create');
})

// Action on create page
router.post('/create', isAuth, async (req, res) => {
    const animalDetails = req.body;
    const userId = req.user?._id;

    try {
        await animalManager.add({ ...animalDetails, owner: userId })
    } catch (error) {
        return res.render('./animals/create', { errorMessage: errorMessageHandler(error) })
    }

    res.redirect('/animals/catalog')
});

// Render product page
router.get('/details/:id', async (req, res) => {
    const animalId = req.params.id;

    try {
        const foundAnimal = await animalManager.getAnimal(animalId).lean();

        // check if user is the owner
        const isOwner = foundAnimal.owner == req.user?._id;

        // check if user has donated
        let donatedBy = foundAnimal.donations.map(el => el.toString())
        const hasDonated = donatedBy.includes(req.user?._id) && req.user;

        res.render('./animals/details', { foundAnimal, isOwner, hasDonated })
    } catch (error) {
        return res.render('./animals/catalog', { errorMessage: errorMessageHandler(error) })
    }
});

router.get('/donate/:id', async (req, res) => {
    const userId = req.user?._id;
    const animalId = req.params.id;

    try {
        await animalManager.donate(animalId, userId);

    } catch (error) {
        const foundAnimal = await animalManager.getAnimal(animalId);
        const isOwner = foundAnimal.owner == req.user?._id;

        let donatedBy = foundAnimal.donations.map(el => el.toString())
        const hasDonated = donatedBy.includes(req.user?._id) && req.user;

        return res.render('./animals/details', { foundAnimal, isOwner, hasDonated, errorMessage: errorMessageHandler(error) })
    }

    res.redirect(`/animals/details/${animalId}`)
})

// Delete
router.get('/delete/:id', isAuth, async (req, res) => {
    const animalId = req.params.id;

    try {
        await animalManager.delete(animalId);
    } catch (error) {
        return res.render(`./animals/catalog`, { errorMessage: errorMessageHandler(error) })
    }

    res.redirect('/animals/catalog');
});

// Get edit page
router.get('/edit/:id', isAuth, async (req, res) => {
    const animalId = req.params.id;

    const foundAnimal = await animalManager.getAnimal(animalId).lean();

    res.render('./animals/edit', { foundAnimal });
});

// Action on edit page
router.post('/edit/:id', isAuth, async (req, res) => {
    const animalId = req.params.id;
    const animalData = req.body;

    try {
        await animalManager.edit(animalId, animalData);
    } catch (error) {
        const foundAnimal = await animalManager.getAnimal(animalId).lean();

        return res.render('./animals/edit', { errorMessage: errorMessageHandler(error), foundAnimal })
    }

    res.redirect(`/animals/details/${animalId}`)
});

router.get('/search', async (req, res) => {

    try {
        const allAnimals = await animalManager.getAll().lean();
        res.render('./animals/search', { allAnimals });
    } catch (error) {
        return res.render('./animals/search', { errorMessage: errorMessageHandler(error) })
    }
});

router.post('/search', async (req, res) => {

    const { search } = req.body;

    try {
        const searchResult = await animalManager.search(search);

        res.render('./animals/search', { allAnimals: searchResult })
    } catch (error) {
        return res.render('./animals/search', { errorMessage: errorMessageHandler(error) })
    }
})

module.exports = router;