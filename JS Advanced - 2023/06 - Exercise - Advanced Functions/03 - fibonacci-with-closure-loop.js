function getFibonator (){

    let arr = [0, 1];

    return function calc (){
        let sum = 0;
        for (let i = arr.length-2; i < arr.length; i++){
            sum += arr[i]
        }
        arr.push(sum)
        return arr[arr.length-2]
    }
}

let fib = getFibonator();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13