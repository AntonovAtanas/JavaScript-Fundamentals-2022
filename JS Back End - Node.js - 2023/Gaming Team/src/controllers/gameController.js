const router = require('express').Router();

router.get('/create', (req, res) => {

    res.render('./games/create');
})

module.exports = router;