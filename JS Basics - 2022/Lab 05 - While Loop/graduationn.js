function graduation(input) {

    let index = 0;

    let studentName = input[index];
    index++

    let score = Number(input[index]);
    index++

    let grade = 1;
    let badgrades = 0;
    let scoreCounter = 0;

    while (grade <= 12) {


        if (score < 4) {
            badgrades++
            if (badgrades == 2) {
                console.log(`${studentName} has been excluded at ${grade} grade`)
                break;
            }
            continue;
        } else {
            scoreCounter += score

        }


        if (grade === 12) {
            console.log(`${studentName} graduated. Average grade: ${(scoreCounter / 12).toFixed(2)}`)
        }

        grade++

        score = Number(input[index]);
        index++

    }


}

graduation

    // (["Gosho",

    // "5",

    // "5.5",

    // "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])


    (["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])