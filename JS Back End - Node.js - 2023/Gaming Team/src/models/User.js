const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [5, 'Username must be at least 5 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        minLength: [10, 'Email must be at least 10 characters']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [4, 'Password must be at least 4 characters long']
    }
});

const User = mongoose.model('User', userSchema);

userSchema.virtual('repeatPassword').set(function (value) {
    if (value !== this.password){
    throw new Error('Password do not match')
}
});

module.exports = User;