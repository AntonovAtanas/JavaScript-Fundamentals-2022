const { MongooseError, Error } = require("mongoose");

exports.errorMessageHandler = (error) => {
    if (error.code == 11000) {
        return { errorMessage: ['Username already taken'] }
    } else if (error instanceof MongooseError) {
        return Object.values(error.errors).map(x => x.message);
    } else {
        return [error.message]
    }
};