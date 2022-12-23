function sameNumbers (input){

    let numberStr = input.toString();
    let sum = 0;
    let tempNumber = Number(numberStr[0]);
    let isSame = true;

    for (let i = 0; i < numberStr.length; i++) {
        sum += Number(numberStr[i]);

        if (tempNumber !== Number(numberStr[i])){
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers (2222222);
sameNumbers (1234);