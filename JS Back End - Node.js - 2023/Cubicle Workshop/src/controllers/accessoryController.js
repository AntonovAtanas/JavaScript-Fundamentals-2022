const router = require('express').Router();

router.get('/accessory', (req, res) => {

    res.render('./accessory/createAccessory')
})

module.exports = router;