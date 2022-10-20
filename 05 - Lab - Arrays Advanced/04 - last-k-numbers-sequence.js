function lastKNumbersSequence (sequenceLength, elements){

    let array = [1];

    for (let i = 1; i < sequenceLength; i++){

        let tempArray = array.slice(-elements);
        let currentNum = 0;

        for (let k of tempArray){
            currentNum += k
        }

        array.push(currentNum)
    }
    console.log(array.join(' '))
}

lastKNumbersSequence (6, 3)