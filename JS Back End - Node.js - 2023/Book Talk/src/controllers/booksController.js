const router = require('express').Router();

const bookManager = require('../managers/bookManager');

const { errorMessageHandler } = require('../utils/errorMessageHandler');
const { isAuth } = require('../middlewares/authMiddleware');


router.get('/catalog', async (req, res) => {

    try {
        const allBooks = await bookManager.allBooks().lean();
        res.render('./books/catalog', { allBooks });
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
    const bookDetails = req.body;
    const userId = req.user?._id;

    try {
        await bookManager.addBook({ ...bookDetails, owner: userId })
    } catch (error) {
        return res.render('./books/create', { errorMessage: errorMessageHandler(error) })
    }

    res.redirect('/books/catalog')
});

// Render product page
router.get('/details/:id', async (req, res) => {
    const bookId = req.params.id;

    try {
        let foundBook = await bookManager.getBook(bookId).lean();
        const userId = req.user?._id;
        // check if user is the owner
        const isOwner = foundBook.owner == userId;

        // TODO check if user has wished the book
        let wishedBy = foundBook.wishlist.map(el => el.toString())
        const hasWished = wishedBy.includes(userId) && req.user;

        res.render('./books/details', { foundBook, isOwner, hasWished })
    } catch (error) {
        return res.render('./books/catalog', { errorMessage: errorMessageHandler(error) })
    }
});

router.get('/details/:id/wish', async (req, res) => {
    const bookId = req.params.id;
    const userId = req.user?._id;

    try {
        await bookManager.wish(bookId, userId);
    } catch (error) {
        return res.render('./books/catalog', { errorMessage: errorMessageHandler(error) })
    }

    res.redirect(`/books/details/${bookId}`);
})

// Delete
router.get('/delete/:id', isAuth, async (req, res) => {
    const bookId = req.params.id;

    try {
        await bookManager.deleteBook(bookId);
    } catch (error) {
        return res.render(`./books/catalog`, { errorMessage: errorMessageHandler(error) })
    }

    res.redirect('/books/catalog');
});

// Get edit page
router.get('/edit/:id', isAuth, async (req, res) => {
    const bookId = req.params.id;

    try {
        const foundBook = await bookManager.getBook(bookId).lean();
        return res.render('./books/edit', { foundBook });
    } catch (error) {
        return res.render('./books/catalog', { errorMessage: errorMessageHandler(error) })
    }
});

// Action on edit page
router.post('/edit/:id', isAuth, async (req, res) => {
    const bookId = req.params.id;
    const bookData = req.body;

    try {
        await bookManager.editBook(bookId, bookData);
    } catch (error) {
        const foundBook = await bookManager.getBook(bookId).lean();
        
        return res.render('./books/edit', { errorMessage: errorMessageHandler(error), foundBook })
    }

    res.redirect(`/books/details/${bookId}`)
});

module.exports = router;