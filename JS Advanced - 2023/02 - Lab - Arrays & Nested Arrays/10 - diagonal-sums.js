function diagonalSums (input){

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let pointer = 0;
    let singleArrayLength = input[0].length - 1

    for (let i = 0; i < input.length; i++){
    
            for (let k = pointer; k <= pointer; k++){
                let num = input[i][pointer];
                mainDiagonal += num;
            }
            pointer++;

            for (let m = singleArrayLength; m >= singleArrayLength; m--){
                let num = input[i][singleArrayLength];
                secondaryDiagonal += num;
            }
            singleArrayLength--;
    }
    console.log(mainDiagonal, secondaryDiagonal)
}

diagonalSums ([ [3, 5, 17],
                [-1, 7, 14], 
                [1, -8, 89]
            ])