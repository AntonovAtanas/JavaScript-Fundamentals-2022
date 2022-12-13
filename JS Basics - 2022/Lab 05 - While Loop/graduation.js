function graduation(input) {


    let name = input[0];
    let index = 1;

    let gradeNum = 0;
    let sum = 0;

    badGradeCount = 0;

    while (gradeNum !== 12) {

        let score = Number(input[index])
        index++

        if (score < 4) {
            badGradeCount++

            if (badGradeCount >= 2) {
                break;
            }
        } else {
            sum += score
        }

        gradeNum++

    }

    if (badGradeCount === 2) {
        console.log(`${name} has been excluded at ${gradeNum} grade`)
        
    } else {
        console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`)
    }


}

graduation(["Gosho",

"5",

"5.5",

"6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])