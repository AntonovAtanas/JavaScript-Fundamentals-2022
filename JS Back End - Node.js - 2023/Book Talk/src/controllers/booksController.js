const router = require('express').Router();

const productManager = require('../managers/productManager');

const { errorMessageHandler } = require('../utils/errorMessageHandler');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/catalog', async (req, res) => {

    try {
        const allProducts = await productManager.allProducts().lean();
        res.render('./books/catalog', { allProducts });
    } catch (error) {
        return res.render('./books/catalog', { errorMessage: errorMessageHandler(error) })
    }
});

// Render create page
router.get('/create', isAuth, (req, res) => {
    res.render('./books/create');
})

// Action on create page
router.post('/create', isAuth, async (req, res) => {
    const productDetails = req.body;
    const userId = req.user?._id;

    try {
        await productManager.addProduct({ ...productDetails, owner: userId })
    } catch (error) {
        return res.render('./books/create', { errorMessage: errorMessageHandler(error) })
    }

    res.redirect('/books/catalog')
});

// Render product page
router.get('/details/:id', async (req, res) => {
    const producId = req.params.id;

    try {
        const foundProduct = await productManager.getProduct(producId).lean();

        // check if user is the owner
        const isOwner = foundProduct.owner == req.user?._id;

        res.render('./books/details', { foundProduct, isOwner })
    } catch (error) {
        return res.render('./books/catalog', { errorMessage: errorMessageHandler(error) })
    }
});

// Delete
router.get('/delete/:id', isAuth, async (req, res) => {
    const productId = req.params.id;

    try {
        await productManager.deleteProduct(productId);
    } catch (error) {
        return res.render(`./books/catalog`, { errorMessage: errorMessageHandler(error) })
    }

    res.redirect('/books/catalog');
});

// Get edit page
router.get('/edit/:id', isAuth, async (req, res) => {
    const productId = req.params.id;

    const foundProduct = await productManager.getProduct(productId).lean();

    res.render('./books/edit', { foundProduct });
});

// Action on edit page
router.post('/edit/:id', isAuth, async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;

    try {
        await productManager.editProduct(productId, productData);
    } catch (error) {
        const foundProduct = await productManager.getProduct(productId).lean();

        return res.render('./product/edit', { errorMessage: errorMessageHandler(error), foundProduct })
    }

    res.redirect(`/books/details/${productId}`)
});

module.exports = router;