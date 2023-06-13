const router = require('express').Router();

const userManager = require('../managers/userManager');

router.get('/register', (req, res) => {
    res.render('./user/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    await userManager.register({ username, email, password, repeatPassword })

    res.redirect('/');
});

router.get('/login', (req, res) => {
    res.render('./user/login')
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userManager.login(email, password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/')
    } catch (error) {
        console.log(error);

    }
})

module.exports = router;