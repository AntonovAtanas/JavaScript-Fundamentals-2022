function commonDivider (firstNum, secondNum) {

    while(secondNum) {
        let t = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = t;
      }
      return console.log(firstNum);
    } 


commonDivider (15, 5)