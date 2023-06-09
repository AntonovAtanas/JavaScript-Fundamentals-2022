exports.optionsGenerator = (difficultyLevel) => {

    let options = [
        '1 - Very Easy',
        '2 - Easy',
        '3 - Medium (Standard 3x3)',
        '4 - Intermediate',
        '5 - Expert',
        '6 - Hardcore'
    ];

    options = options.map((level, index) => {
        return {
            title: level,
            value: index + 1,
            selected: index + 1 === difficultyLevel
        }
    })

    return options
}