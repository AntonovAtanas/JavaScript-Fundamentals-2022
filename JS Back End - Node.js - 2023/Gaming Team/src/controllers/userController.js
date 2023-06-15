const router = require('express').Router();

const userManager = require('../managers/userManager');

const { errorMessageHandler } = require('../utils/errorMessageHandler')

// Register page 
router.get('/register', (req, res) => {
    res.render('./user/register');
});

// Register page action
router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        await userManager.register({ username, email, password, repeatPassword })
    } catch (error) {
        const errorMessage = errorMessageHandler(error)
        return res.render('./user/register', { errorMessage });
    }

    res.redirect('/');
});

// Login page
router.get('/login', (req, res) => {
    res.render('./user/login')
});

// Login page action
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userManager.login(email, password);

        res.cookie('auth', token, { httpOnly: true });

        res.redirect('/')
    } catch (error) {
        return res.render('./user/login', { errorMessage: errorMessageHandler(error) })
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

module.exports = router;