const express = require('express');
const cookieParser = require("cookie-parser");

const { auth } = require('../middlewares/authMiddleware');

function expressConfig(app) {
    // add static files middleware loader - initial images, css 
    app.use(express.static('src/public'))
    // add body parser middleware
    app.use(express.urlencoded({ extended: false }))
    // Cookie parser middleware
    app.use(cookieParser());
    // add auth middleware
    app.use(auth);

}

module.exports = expressConfig;