function equalNeighbors(matrix) {
    let equal = 0;
    
    for (let i = 0; i < matrix.length; i++){

        for (let k = 0; k < matrix[i].length; k++){
            let currentNumber = matrix[i][k];

            for (let m = k+1; m <= k+1; m++){
            
                let compareNumber = matrix[i][m]
                if (currentNumber == compareNumber){
                    equal++
                }
            }
            if (i+1 < matrix.length){
            let compareByNextArray = matrix[i+1][k]
            if (currentNumber == compareByNextArray){
                equal++
            }}
        }
    }
    console.log(equal)
}

equalNeighbors(
    [['test', 'yo', 'yo', 'ho'], ['well', 'done', 'no', '6'], ['not', 'done', 'yet', '5']])