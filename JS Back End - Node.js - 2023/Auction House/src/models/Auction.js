const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [4, 'Minimum length is 4 characters']
    },
    description: {
        type: String,
        maxLength: [200, 'Maximum length is 200 characters']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: ['Vehicles', 'Real Estate', 'Electronics', 'Furniture', 'Other']
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [1, 'Price must be positive number']
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    bidder: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;