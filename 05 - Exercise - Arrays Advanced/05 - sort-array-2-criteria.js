function sortArray (input){

    let array = input.slice();

    array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    })
    console.log(array.join(' \n'))
}

sortArray (['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])