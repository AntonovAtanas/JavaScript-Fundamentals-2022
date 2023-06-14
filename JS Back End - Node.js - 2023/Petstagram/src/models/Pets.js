const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pet name is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    age: {
        type: Number,
        required: [true, 'Pet age is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    commentList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;