function schoolRegister(input) {

    let array = [];
    let studentRegister = {};

    input.forEach(element => {
        let splittedLine = element.split(', ');
        array.push(splittedLine)
    });

    array.sort((studentA, studentB) => {
        let [studentAGrade, gradeA] = studentA[1].split(": ")
        let [studentBGrade, gradeB] = studentB[1].split(": ")
        return gradeA - gradeB
    })

    array.forEach(studentInfo => {
        let [info, name] = studentInfo[0].split(': ');
        let [grade, gradeNum] = studentInfo[1].split(': ');
        let [avg, averageScore] = studentInfo[2].split(': ');
        gradeNum = Number(gradeNum);
        let newgrade = gradeNum + 1;
        averageScore = Number(averageScore);

        if (averageScore >= 3) {
            
            if (!studentRegister.hasOwnProperty(newgrade)) {
                studentRegister[newgrade] = [[], []];
            }
            let namesArray = studentRegister[newgrade];
            namesArray[0].push(name);
            namesArray[1].push(averageScore)
        }
    })

    for (const key in studentRegister) {
        console.log(`${key} Grade`);
        console.log(`List of students: ${studentRegister[key][0].join(', ')}`)

        let totalAnnualScore = 0;
        studentRegister[key][1].forEach(element => {
            totalAnnualScore += element
        });

        let averageAnnualScore = totalAnnualScore / (studentRegister[key][1].length)
        console.log(`Average annual score from last year: ${averageAnnualScore.toFixed(2)}`)
        console.log(` `)
    }
}

schoolRegister([

    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",

    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",

    "Student name: George, Grade: 8, Graduated with an average score: 2.83",

    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",

    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",

    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",

    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",

    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",

    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",

    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",

    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",

    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])