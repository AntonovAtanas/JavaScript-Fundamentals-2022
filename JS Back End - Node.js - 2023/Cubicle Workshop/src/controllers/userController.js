const router = require('express').Router();
const userManager = require('../managers/userManager');

const { errorMessage } = require('../utils/errorMessageHandler');

router.get('/register', (req, res) => {
    res.render('./user/registerPage');
});

router.post('/register', async (req, res) => {

    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.render('./user/registerPage', { errorMessage: ['Passwords do not match'] })
    }

    try {
        await userManager.register({ username, password });
    } catch (error) {
        return res.render('./user/registerPage', errorMessage(req, error));
    }

    res.redirect('/');
});

router.get('/login', (req, res) => {
    res.render('./user/loginPage');
});

router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    const token = await userManager.login(username, password);

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');
});

router.get('/logout', (req, res) => {

    res.clearCookie('auth');

    res.redirect('/');
})

module.exports = router;