function foreach (matrix){

    let firstRow = matrix[0].reduce((a, b) => a+b);
    let firstColumn = 0; 
    matrix.forEach (row => firstColumn += row[0])

    let areEqual = true;

    
        for (let i = 0; i < matrix.length; i++){
            let currentRow = matrix[i].reduce((a, b) => a+b);
            let currentColumn = 0;

            for (let k = 0; k < matrix.length; k++){
                currentColumn += matrix[k][i];
            }

            if (firstRow !== currentRow || firstColumn !== currentColumn){
                areEqual = false;
                break;
            }
        }

        console.log(areEqual)
}

foreach ([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])