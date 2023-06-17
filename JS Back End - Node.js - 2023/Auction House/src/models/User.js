const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/, 'Email is invalid']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [4, 'Password must be at least 4 characters long']
    },
    firstname: {
        type: String,
        required: [true, 'First name is required'],
        minLength: [1, 'First name must be at least 1 character long']
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required'],
        minLength: [1, 'Last name must be at least 1 character long']
    }
});

userSchema.virtual('repeatPassword').set(function (value) {
    if (value !== this.password){
    throw new Error('Passwords do not match')
}
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
})

const User = mongoose.model('User', userSchema);

module.exports = User;