function listOfProducts(input) {

    let array = input;

    array.sort()
    let finalArray = [];

    for (let i = 0; i < array.length; i++) {

        finalArray.push(`${i + 1}.${array[i]}`)
      
    }

    console.log(finalArray.join('\n'))
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])