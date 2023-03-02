function handlerErr(arr, start, end) {

    if (!Array.isArray(arr)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, arr.length - 1)
    let slicedArr = arr.slice(startIndex, endIndex + 1);
    let sum = slicedArr.reduce((acc, val) => acc + Number(val), 0)

    return sum;
}

console.log(handlerErr([10, 20, 30, 40, 50, 60], 3, 300));
console.log(handlerErr([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(handlerErr([10, 'twenty', 30, 40], 0, 2));