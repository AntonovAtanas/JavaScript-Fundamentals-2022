const router = require('express').Router();
const jwtoken = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwtoken.verify(token, SECRET);

            req.user = decodedToken;

            res.locals.isAuthenticated = true;

            next();
        } catch (error) {
            res.clearCookie('auth');
            res.redirect('/user/login');
        }
    } else {
        next();
    }
};