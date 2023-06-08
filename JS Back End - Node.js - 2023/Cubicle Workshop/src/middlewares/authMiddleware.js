const router = require('express').Router();

const jwtoken = require('../lib/jwtoken');

const { secret } = require('../config/constants');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            // has token and it is valid
            const user = await jwtoken.verify(token, secret);

            // attach user data to every next request
            req.user = user;

            // attach local variable that user is authenticated
            res.locals.isAuthenticated = true;

            next();
        } catch (error) {
            // has token but it is not valid
            res.clearCookie('auth');
            return res.redirect('/user/login');
        }
    } else {
        // does not have token
        next();
    }
}
