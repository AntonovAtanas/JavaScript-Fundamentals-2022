const User = require('../models/User');
const jwtoken = require('../lib/jwtoken');
const bcrypt = require('bcrypt');

const { secret } = require('../config/constants')

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    const user = await User.findOne({ username }).lean();

    if (!user) {
        throw new Error('Username not found!');
    };

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Password missmatch!');
    };

    const payload = {
        _id: user._id,
        username: user.username
    };

    const token = await jwtoken.sign(payload, secret);

    return token;
}

