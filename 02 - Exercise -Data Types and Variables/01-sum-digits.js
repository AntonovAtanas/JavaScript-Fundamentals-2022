function sumDigits (number){

    let numToStr = number.toString();
    counter = 0;

        for (let i = 0; i < numToStr.length; i++){
            let digit = Number(numToStr[i]);

            counter += digit
        }
        console.log(counter)
}

sumDigits(245678)