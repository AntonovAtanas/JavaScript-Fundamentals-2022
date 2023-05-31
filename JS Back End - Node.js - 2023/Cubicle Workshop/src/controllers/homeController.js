const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');

router.get('/', async (req, res) => {
    const {search, from, to} = req.query;

    let cubes = await cubeManager.getAll(search, from, to);
    
    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;