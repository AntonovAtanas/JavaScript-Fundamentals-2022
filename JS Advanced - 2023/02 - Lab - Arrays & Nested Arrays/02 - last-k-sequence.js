function lastSequence (n, k) {

    let array = [1];

   for (let i = 1; i < n; i++){
        let lastK = array.slice(-k);
        let sum = 0;

        for (const num of lastK) {
            sum += Number(num)
        }
        array.push(sum);
   }
    return array;
}

console.log(lastSequence (6, 3))