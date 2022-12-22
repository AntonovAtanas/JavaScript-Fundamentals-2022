function aggregateElements (array){

    let sum = 0;
    let inverseSum = 0;
    for (const num of array) {
        sum += num;
        inverseSum += (1/num)
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(array.join(''));

}

aggregateElements ([1, 2, 3])