const router = require('express').Router();

const cryptoManager = require('../managers/cryptoManager');

const { errorMessageHandler } = require('../utils/errorMessageHandler');
const { isAuth } = require('../middlewares/authMiddleware');
const { optionsGenerator } = require('../utils/optionsGenerator');

router.get('/catalog', async (req, res) => {

    try {
        const allCrypto = await cryptoManager.allProducts().lean();
        res.render('./crypto/catalog', { allCrypto });
    } catch (error) {
        return res.render('./crypto/catalog', { errorMessage: errorMessageHandler(error) })
    }
});

// Render create page
router.get('/create', isAuth, (req, res) => {
    res.render('./crypto/create');
})

// Action on create page
router.post('/create', isAuth, async (req, res) => {
    const cryptoDetails = req.body;
    const userId = req.user?._id;

    try {
        await cryptoManager.addCrypto({ ...cryptoDetails, owner: userId })
    } catch (error) {
        return res.render('./crypto/create', { errorMessage: errorMessageHandler(error) })
    }

    res.redirect('/crypto/catalog')
});

// Render product page
router.get('/details/:id', async (req, res) => {
    const cryptoId = req.params.id;

    try {
        const foundCrypto = await cryptoManager.getCrypto(cryptoId).lean();

        // check if user is the owner
        const isOwner = foundCrypto.owner == req.user?._id;

        let boughtBy = foundCrypto.boughtBy.map(el => el.toString())
        const hasBought = boughtBy.includes(req.user?._id) && req.user;

        res.render('./crypto/details', { foundCrypto, isOwner, hasBought })
    } catch (error) {
        return res.render('./crypto/catalog', { errorMessage: errorMessageHandler(error) })
    }
});

// Buy
router.get('/buy/:id', async (req, res) => {
    const cryptoId = req.params.id;
    const userId = req.user?._id;

    try {
        await cryptoManager.buyCrypto(cryptoId, userId);
    } catch (error) {
        console.log(error)
        return res.render(`./crypto/details`, { errorMessage: errorMessageHandler(error) })
    }

    res.redirect(`/crypto/details/${cryptoId}`);
})

// Delete
router.get('/delete/:id', isAuth, async (req, res) => {
    const cryptoId = req.params.id;

    try {
        await cryptoManager.deleteCrypto(cryptoId);
    } catch (error) {
        return res.render(`./crypto/catalog`, { errorMessage: errorMessageHandler(error) })
    }

    res.redirect('/crypto/catalog');
});

// Get edit page
router.get('/edit/:id', isAuth, async (req, res) => {
    const cryptoId = req.params.id;

    const foundCrypto = await cryptoManager.getCrypto(cryptoId).lean();

    const options = optionsGenerator(foundCrypto.payment);

    res.render('./crypto/edit', { foundCrypto, options });
});

// Action on edit page
router.post('/edit/:id', isAuth, async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;

    try {
        await cryptoManager.editProduct(productId, productData);
    } catch (error) {
        const foundProduct = await cryptoManager.getProduct(productId).lean();

        return res.render('./crypto/edit', { errorMessage: errorMessageHandler(error), foundProduct })
    }

    res.redirect(`/crypto/details/${productId}`)
});

module.exports = router;