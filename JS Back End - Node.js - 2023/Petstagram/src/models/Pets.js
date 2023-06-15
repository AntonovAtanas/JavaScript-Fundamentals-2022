const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [2, 'Name must be minimum 2 characters'],
        required: [true, 'Pet name is required']
    },
    image: {
        type: String,
        match: [/^https?:\/\//, 'Image must start with http or https'],
        required: [true, 'Image is required']
    },
    age: {
        type: Number,
        minLength: [1, 'Age must be min 1 character'],
        maxLength: [100, 'Age must be no more than 100 characters'],
        required: [true, 'Pet age is required']
    },
    description: {
        type: String,
        minLength: [5, 'Description must be min 1 character'],
        maxLength: [50, 'Description must be no more than 50 characters'],
        required: [true, 'Description is required']
    },
    location: {
        type: String,
        minLength: [5, 'Location must be min 1 character'],
        maxLength: [50, 'Location must be no more than 50 characters'],
        required: [true, 'Location is required']
    },
    commentList: [{
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },
        message: {
            type: String,
            required: [true, 'Please enter your comment']
        }
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;