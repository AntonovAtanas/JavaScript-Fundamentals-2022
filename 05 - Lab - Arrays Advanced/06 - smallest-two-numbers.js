function smallestTwoNumbers (input){

    let sortedArray = input;

    sortedArray.sort((a, b) => a - b);
    let result = sortedArray.slice(0, 2);

    console.log(result.join(' '))
}

smallestTwoNumbers ([30, 15, 50, 5])