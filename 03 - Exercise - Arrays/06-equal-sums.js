function equalSums(input) {

    let rightSum = 0;
    let leftSum = 0;

    for (let i = 1; i <= input.length; i++) {

        for (let leftNumbers = i - 1; leftNumbers >= 0; leftNumbers--) {
            let leftNum = input[leftNumbers]
            leftSum += leftNum
        }

        for (let rightNumbers = i + 1; rightNumbers <= input.length - 1; rightNumbers++) {
            let rightNum = input[rightNumbers];
            rightSum += rightNum
        }
        
        if (i === input.length - 1 && rightSum !== leftSum) {
            console.log(`no`)
        }

        if (rightSum === leftSum) {
            console.log(`${i}`);
            return
        } else {
            rightSum = 0;
            leftSum = 0;
        }

        if (input.length < 2){
            console.log(0)
        }
    }
}

equalSums([1])