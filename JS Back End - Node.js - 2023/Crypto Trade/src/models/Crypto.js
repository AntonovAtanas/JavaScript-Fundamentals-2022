const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [2, 'Name must be min 2 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [1, 'Price must be positive number']
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        match: [/^https?:\/\//, 'Image must start with http or https'],
    },
    description: {
        type: String,
        minLength: [10, 'Description must be minimum 10 characters long'],
        required: [true, 'Description is required']
    },
    payment: {
        type: String,
        required: [true, 'Payment method is required'],
        enum: ['Paypal', 'crypto-wallet', 'credit-card', 'debit-card']
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

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;