exports.errorMessageHandler = (error) => {
    if (error.code == 11000) {
        return { errorMessage: ['Username already taken'] }
    } else if (typeof error == 'string'){
        return { errorMessage: [error] };
    }
    const errorMessage = Object.values(error.errors)

    return { errorMessage }
};