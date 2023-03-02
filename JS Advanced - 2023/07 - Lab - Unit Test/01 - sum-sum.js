function handlerErr(arr, start, end) {

    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > arr.length - 1) {
        end = arr.length - 1
    }

    let sum = 0;

    for (let i = start; i < end + 1; i++) {
        if (typeof arr[i] !== 'number') {
            return NaN
        }
        sum += arr[i];
    }

    return sum;
}

console.log(handlerErr([10, 20, 30, 40, 50, 60], 3, 300));
console.log(handlerErr([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(handlerErr([10, 'twenty', 30, 40], 0, 2));