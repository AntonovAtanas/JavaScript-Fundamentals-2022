function dictionary(input) {

    input.sort((a, b) => a.localeCompare(b))
    let array = []

    for (let term of input) {
        let parsedJSON = JSON.parse(term)

        for (let i = 0; i < array.length; i++) {
            let checkIfDuplicate = array[i]
            if (checkIfDuplicate.hasOwnProperty(Object.keys(parsedJSON))) {
                let duplicatedIndex = array.indexOf(Object.keys(parsedJSON));
                array.splice(duplicatedIndex, 1)
            }
        }
        array.push(parsedJSON)
    }

    for (let currentLine of array) {
        for (let key of Object.keys(currentLine)) {
            console.log(`Term: ${key} => Definition: ${currentLine[key]}`)
        }
    }

}
dictionary([

    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',

    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, an other ingredients, baked and sometimes iced or decorated."}',

    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',

    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',

    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such aspainting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
])