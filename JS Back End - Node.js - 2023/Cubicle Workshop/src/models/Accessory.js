const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String
});

const Accessory = mongoose.model('Accessory', cubeSchema);

module.exports = Accessory;