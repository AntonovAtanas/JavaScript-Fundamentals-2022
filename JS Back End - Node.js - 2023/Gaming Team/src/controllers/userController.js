const router = require('express').Router();

const userManager = require('../managers/userManager')

router.get('/register', (req, res) => {
    res.render('./user/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    await userManager.register({ username, email, password, repeatPassword })

    res.redirect('/user/login');
});

router.get('/login', (req, res) => {
    res.render('./user/login')
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const userData = await userManager.getUser(email);

    

    res.redirect('/')
})

module.exports = router;