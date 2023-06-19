const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [2, 'Name must be minimum 2 characters'],
        required: [true, 'Name is required']
    },
    years: {
        type: Number,
        required: [true, 'Years is required'],
        min: [1, 'Year must be minimum 1'],
        max: [100, 'Year must be maximum 100']
    },
    kind: {
        type: String,
        minLength: [3, 'Kind must be minimum 3 characters'],
        required: [true, 'Kind is required']
    },
    image: {
        type: String,
        match: [/^https?:\/\//, 'Image must start with http or https'],
        required: [true, 'Image is required']
    },
    need: {
        type: String,
        minLength: [3, 'Need must be min 3 characters'],
        maxLength: [20, 'Need must be max 20 characters'],
        required: [true, 'Need is required']
    },
    location: {
        type: String,
        minLength: [5, 'Location must be min 5 characters'],
        maxLength: [15, 'Location must be max 15 characters'],
        required: [true, 'Location is required']
    },
    description: {
        type: String,
        minLength: [5, 'Description must be min 5 characters'],
        maxLength: [50, 'Description must be max 50 characters'],
        required: [true, 'Description is required']
    },
    donations: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;