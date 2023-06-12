const express = require('express');


function expressConfig(app){
    app.use(express.static('src/public'))
}

module.exports = expressConfig