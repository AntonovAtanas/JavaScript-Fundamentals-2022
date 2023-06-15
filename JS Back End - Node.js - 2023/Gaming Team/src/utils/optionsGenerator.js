exports.optionsGenerator = (platform) => {

    let options = [
        'PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'
    ];

    options = options.map((option) => {
        selected = platform === option;

        return {
            option: option,
            selected: selected
        }
    })

    return options
}