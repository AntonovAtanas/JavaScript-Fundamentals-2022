const express = require('express');

function expressConfig(app){
    // add static files middleware loader - initial images, css 
    app.use(express.static('../public'))
    // add body parser middleware
    app.use(express.urlencoded({extended: false}))
}

module.exports = expressConfig;