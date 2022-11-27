function lettersChangeNumbers (input){

    let numbersArray = input.trim().split(' ');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let totalSum = 0;
    
    for (const currentNum of numbersArray) {
        if (currentNum == ''){
            continue;
        }
        let desctructoredNum = currentNum.split('')
        let startingLetter = desctructoredNum.shift();
        let endingLetter = desctructoredNum.pop();
        let number = desctructoredNum.join('');
        number = Number(number);
        let sum = 0;

        if (startingLetter === startingLetter.toUpperCase()){
            let alphabetNumber = Number(alphabet.indexOf(startingLetter.toLowerCase()));
            let tempSum = number / (alphabetNumber + 1);
            sum += tempSum
        } else if (startingLetter === startingLetter.toLowerCase()){
            let alphabetNumber = Number(alphabet.indexOf(startingLetter));
            let tempSum = number * (alphabetNumber + 1);
            sum += tempSum
        }

        if (endingLetter === endingLetter.toUpperCase()){
            let alphabetNumber = Number(alphabet.indexOf(endingLetter.toLowerCase()));
            sum -= alphabetNumber + 1
        } else if (endingLetter === endingLetter.toLowerCase()){
            let alphabetNumber = Number(alphabet.indexOf(endingLetter.toLowerCase()));
            sum += alphabetNumber + 1
        }

        totalSum += sum
    }
    console.log(totalSum.toFixed(2))
}

lettersChangeNumbers ('P34562Z q2576f  H456z')