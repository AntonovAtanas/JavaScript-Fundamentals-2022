exports.errorMessage = (res, error) => {
    if (error.code == 11000) {
        return { errorMessage: ['Username already taken'] }
    }
    const errorMessage = Object.values(error.errors)

    return { errorMessage }
}