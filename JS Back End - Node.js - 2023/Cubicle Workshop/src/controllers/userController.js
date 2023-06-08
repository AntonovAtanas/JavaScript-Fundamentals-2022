const router = require('express').Router();
const userManager = require('../managers/userManager');


router.get('/register', (req, res) => {
    res.render('./user/registerPage');
});

router.post('/register', (req, res) => {

    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        res.redirect('/404')
        throw new Error('Passwords do not match');
    }

    userManager.register({ username, password });
    res.redirect('/');
})

router.get('/login', (req, res) => {
    res.render('./user/loginPage');
})

module.exports = router;