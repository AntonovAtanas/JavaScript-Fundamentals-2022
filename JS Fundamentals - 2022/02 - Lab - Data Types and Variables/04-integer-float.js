function integerOrFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;

    if (sum !== Math.floor(sum)){
        console.log(`${sum} - Float`)
    } else {
        console.log(`${sum} - Integer`)
    }

} 

integerOrFloat(100, 200, 303)