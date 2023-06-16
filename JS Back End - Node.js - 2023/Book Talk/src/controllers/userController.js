const router = require('express').Router();

const userManager = require('../managers/userManager');
const bookManager = require('../managers/bookManager');

const { errorMessageHandler } = require('../utils/errorMessageHandler');

router.get('/register', (req, res) => {
    res.render('./user/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        const token = await userManager.register({ username, email, password, repeatPassword });
        // auto login after registration
        res.cookie('auth', token, { httpOnly: true })


    } catch (error) {
        const errorMessage = errorMessageHandler(error)
        return res.render('./user/register', { errorMessage });
    }
    res.redirect('/')
});

router.get('/login', (req, res) => {
    res.render('./user/login')
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userManager.login(email, password);

        res.cookie('auth', token, { httpOnly: true });
    } catch (error) {
        return res.render('./user/login', { errorMessage: errorMessageHandler(error) })
    }

    res.redirect('/')
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

router.get('/profile', async (req, res) => {
    const userId = req.user?._id;
    const userEmail = req.user?.email;

    try {
        const booksResult = await bookManager.userWishlist(userId).lean();

        return res.render('./user/profile', { booksResult, userEmail })
    } catch (error) {

    }
});

module.exports = router;