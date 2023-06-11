const router = require('express').Router();
const userManager = require('../managers/userManager');

const { errorMessageHandler } = require('../utils/errorMessageHandler');

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
        return res.render('./user/registerPage', errorMessageHandler(error));
    }

    res.redirect('/');
});

router.get('/login', (req, res) => {
    res.render('./user/loginPage');
});

router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    if (!username) {
        return res.render('./user/loginPage', errorMessageHandler('Please fill your username'));
    } else if (!password){
        return res.render('./user/loginPage', errorMessageHandler('Please fill your password'));
    }

    try {
        const token = await userManager.login(username, password);    
        
        res.cookie('auth', token, { httpOnly: true });

        res.redirect('/');
    } catch (error) {
        return res.render('./user/loginPage', errorMessageHandler(error.message));
    }
});

router.get('/logout', (req, res) => {

    res.clearCookie('auth');

    res.redirect('/');
})

module.exports = router;