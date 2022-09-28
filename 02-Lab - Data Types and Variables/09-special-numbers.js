function specialNumbers (number){

    let counter = 1;

    while (counter <= number){
        let counterToStr = counter.toString();
        let sum = 0;

        for (let i = 0; i < counterToStr.length; i++){
            let digit = Number(counterToStr[i]);
            sum += digit
        }

        if (sum === 5 || sum === 7 || sum === 11){
            console.log(`${counter} -> True`)
        } else {
            console.log(`${counter} -> False`)
        }

        counter++
    }
}

specialNumbers(15)