const router = require('express').Router();
const userManager = require('../managers/userManager');
const cookieParser = require('cookie-parser');

router.get('/register', (req, res) => {
    res.render('./user/registerPage');
});

router.post('/register', async (req, res) => {

    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        res.redirect('/404')
        throw new Error('Passwords do not match');
    }

    await userManager.register({ username, password });
    res.redirect('/');
});

router.get('/login', (req, res) => {
    res.render('./user/loginPage');
});

router.post('/login', async (req, res) => {

    const {username, password} = req.body;

    const token = await userManager.login(username, password);

    res.cookie('auth', token, {httpOnly: true});

    res.redirect('/');
})

module.exports = router;