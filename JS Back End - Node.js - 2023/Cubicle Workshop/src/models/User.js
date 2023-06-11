const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
        minLength: [5, 'Username too short'],
        match: [/^[A-Za-z0-9]+/, 'Only letters and numbers allowed']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        match: [/^[A-Za-z0-9]+/, 'Only letters and numbers allowed'],
        minLength: [8, 'Password too short']
    }
});

userSchema.pre('save', async function() {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
})

const User = mongoose.model('User', userSchema);

module.exports = User;