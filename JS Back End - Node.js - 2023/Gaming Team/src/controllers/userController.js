const router = require('express').Router();

const userManager = require('../managers/userManager')

router.get('/register', (req, res) => {
    res.render('./user/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    await userManager.register({ username, email, password, repeatPassword })

    res.redirect('/');
})

module.exports = router;