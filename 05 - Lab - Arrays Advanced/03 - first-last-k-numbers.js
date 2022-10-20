function firstLastKNumbers (input){

    let elementsCount = input.shift();

    let firstElements = input.slice(0, elementsCount);
    let lastElements = input.slice(input.length - elementsCount)

    console.log(firstElements.join(' '))
    console.log(lastElements.join(' '))
}

firstLastKNumbers ([2, 7, 8, 9])