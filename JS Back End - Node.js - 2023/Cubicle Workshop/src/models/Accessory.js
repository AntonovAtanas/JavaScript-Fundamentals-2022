const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        match: [/^[A-Za-z0-9 ]+$/, 'Invalid name characters used.'],
        minLength: [5, 'Name must be minimum 5 characters.'],
        required: [true, 'Name is required']
    },
    description: {
        type: String,
        match: [/^[A-Za-z0-9 ]+$/, 'Invalid description characters used'],
        minLength: [20, 'Description must be minimum 20 characters'],
        required: [true, 'Description is required']
    },
    imageUrl: {
        type: String,
        match: [/^https:\/\/|http:\/\//, 'Invalid image URL'],
        required: [true, 'Image URL is required']
    },
});

const Accessory = mongoose.model('Accessory', cubeSchema);

module.exports = Accessory;