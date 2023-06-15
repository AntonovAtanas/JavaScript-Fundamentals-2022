const router = require('express').Router();

const userManager = require('../managers/userManager');
const petsManager = require('../managers/petsManager');

const { errorMessageHandler } = require('../utils/errorMessageHandler');
const { isAuth } = require('../middlewares/authMiddleware');


// Register page
router.get('/register', (req, res) => {
    res.render('./user/register');
});

// Register action
router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        const token = await userManager.register({ username, email, password, repeatPassword });

        res.cookie('auth', token, { httpOnly: true });
    } catch (error) {
        return res.render('./user/register', { errorMessage: errorMessageHandler(error) });
    }

    res.redirect('/');
});

// Login page
router.get('/login', (req, res) => {
    res.render('./user/login')
});

// Login action
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await userManager.login(username, password);

        res.cookie('auth', token, { httpOnly: true });

        res.redirect('/')
    } catch (error) {
        return res.render('./user/login', { errorMessage: errorMessageHandler(error) })
    }
});

// Logout action
router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

// User profile page

router.get('/profile', isAuth, async (req, res) => {
    const userId = req.user._id;

    const user = await userManager.getProfile(userId).lean();
    const userPets = await petsManager.getUserPets(userId).lean();

    res.render('./user/profile', {user, userPets});
})

module.exports = router;