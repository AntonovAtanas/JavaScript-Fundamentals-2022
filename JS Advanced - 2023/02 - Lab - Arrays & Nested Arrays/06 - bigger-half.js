function biggerHalf(input) {

    let sortedArr = input.sort((a, b) => a - b);
    let bigger = [];
    bigger = sortedArr.splice((sortedArr.length / 2));
    return bigger;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));