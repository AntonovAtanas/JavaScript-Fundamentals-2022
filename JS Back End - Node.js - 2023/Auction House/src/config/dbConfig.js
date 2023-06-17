const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/auctionhouse'

async function dbConnect () {
    try {
        await mongoose.connect(uri);
        console.log('Successfully connected to database.')
    } catch (error) {
        console.log(`Database connection error - ${error}`)
    }
}

module.exports = dbConnect;