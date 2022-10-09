function mathPower (firstNum, secondNum){

    let num = 1;

    for (let i = 0; i <secondNum; i++){
        num = firstNum * num
    }

    console.log(num)

}

mathPower (2, 8)