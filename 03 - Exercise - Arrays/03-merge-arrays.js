function mergeArrays (input1, input2){
    let thirdArray = [];

    for (let i = 0; i < input1.length; i++){

        for (let k = i; k < input2.length; k++){
            if ( i % 2 === 0){
                thirdArray[i] = Number(input1[i]) + Number(input2[k])
                break;
            } else {
                thirdArray[i] = input1[i] + input2[k];
                break;
            }
        }
    }
    console.log(thirdArray.join(" - "))
}

mergeArrays (['13', '12312', '5', '77', '4'],

['22', '333', '5', '122', '44'])