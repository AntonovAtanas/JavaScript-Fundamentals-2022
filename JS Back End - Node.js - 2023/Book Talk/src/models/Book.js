const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [2, 'Title should be minimum 2 characters']
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        minLength: [5, 'Author should be minimum 5 characters']
    },
    image: {
        type: String,
        match: [/^https?:\/\//, 'Image must start with http or https'],
        required: [true, 'Image is required']
    },
    review: {
        type: String,
        required: [true, 'Review is required'],
        minLength: [10, 'Review should be minimum 10 characters']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minLength: [3, 'Genre should be minimum 3 characters']
    },
    stars: {
        type: Number,
        required: [true, 'Stars is required'],
        min: [1, 'Rating must be between 1 and 5'],
        max: [5, 'Rating must be between 1 and 5']
    },
    wishlist: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book