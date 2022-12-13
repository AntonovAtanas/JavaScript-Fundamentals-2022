function numberPyramid (input){
    
    let n = Number(input[0])

    let current = 1;
    let isBigger = false;
    let buff = "";

    for (let rows = 1; rows <= n ; rows++){

        for (let columns = 1; columns <= rows ; columns++){
            if (current > n){
                isBigger = true;
                break;
            }
            buff += current + " ";
            current++;
        }

        console.log(buff)
        buff = "";
        if (isBigger){
            break;
        }

    }

}

numberPyramid (["15"])