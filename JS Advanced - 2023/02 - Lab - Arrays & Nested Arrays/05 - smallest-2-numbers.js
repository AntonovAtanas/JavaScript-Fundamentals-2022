function smallestNumbers (input){

    let sortedArr = input.sort((a, b) => a-b);

    console.log(sortedArr[0], sortedArr[1])

}

smallestNumbers ([30, 15, 50, 5])