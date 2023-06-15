const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    platform: {
        type: String,
        required: [true, 'Platform is required']
    },
    name: {
        type: String,
        minLength: [4, 'Name must be minimum 4 characters'],
        required: [true, 'Name is required']
    },
    image: {
        type: String,
        match: [/^https?:\/\//, 'Image must start with http or https'],
        required: [true, 'Image is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [1, 'Price must be positive number']
    },
    genre: {
        type: String,
        minLength: [2, 'Genre must be minimum 2 characters long'],
        required: [true, 'Genre is required']
    },
    description: {
        type: String,
        minLength: [10, 'Description must be minimum 10 characters long'],
        required: [true, 'Description is required']
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    boughtBy: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;