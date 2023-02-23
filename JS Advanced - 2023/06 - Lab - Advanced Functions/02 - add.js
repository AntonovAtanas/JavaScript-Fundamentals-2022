function solution(num) {

    return function add5(inc) {
        return num + inc;
    }
}



let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));