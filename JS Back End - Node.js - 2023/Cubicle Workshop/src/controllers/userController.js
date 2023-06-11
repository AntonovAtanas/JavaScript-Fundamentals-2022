const router = require('express').Router();
const userManager = require('../managers/userManager');

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
        if (error.code == 11000){
            return res.render('./user/registerPage', { errorMessage: ['Username already taken'] })
        }
        const errorMessage = Object.values(error.errors)

        return res.render('./user/registerPage', { errorMessage })
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