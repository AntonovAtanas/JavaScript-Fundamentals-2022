const router = require('express').Router();

router.get('/cube/add', (req, res) => {
    res.render('create');
});

module.exports = router;