function exam(input) {

    let index = 0;
    let badGrades = Number(input[index]);
    index++

    let command = input[index];
    index++

    let sumGrades = 0;
    let problemsCounter = 0;
    let gradeCounter = 0;
    let lastProblem = 0;

    while (command !== "Enough") {

        lastProblem = command;

        let problemGrade = Number(input[index]);
        index++

        sumGrades += problemGrade;
        gradeCounter++

        if (problemGrade <= 4) {
            problemsCounter++
            if (problemsCounter === badGrades) {
                console.log(`You need a break, ${problemsCounter} poor grades.`)
                break;
            }
        }

        command = input[index];
        index++

    }
    if (problemsCounter < badGrades) {
        console.log(`Average score: ${(sumGrades / gradeCounter).toFixed(2)}`)
        console.log(`Number of problems: ${gradeCounter}`)
        console.log(`Last problem: ${lastProblem}`)
    }

}

exam(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"])