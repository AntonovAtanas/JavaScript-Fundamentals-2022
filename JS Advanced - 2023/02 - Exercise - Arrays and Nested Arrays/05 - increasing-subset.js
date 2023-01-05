function extractIncreasingSubset (input){

    let resultArr = [];
    let num = Number.MIN_SAFE_INTEGER;

    for (const currentNum of input) {
        if (currentNum >= num){
            resultArr.push(currentNum);
            num = currentNum;
        }
    }

    let reducedArr = input.reduce()

    return resultArr;
}



extractIncreasingSubset ([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubset ([1, 2, 3, 4]);
extractIncreasingSubset ([20, 3, 2, 15, 6, 1]);