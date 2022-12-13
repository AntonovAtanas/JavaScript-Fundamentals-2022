function exam (input){

    let index = 0;
    let badGrades = Number(input[index]);
    index++
    //let exerciseTitle = input[index];
    //index++

    let command = input[index];
    index++
    
    let averageScore = 0;
    let lastExam = 0;
    let numberOfExams = 0;
    let poorGrades = 0;
    let sumScore = 0;


    while ( command !== "Enough"){
        lastExam = command;

        let grade = Number(input[index])
        index++
        sumScore += grade
       
        command = input[index]
        index++

        if (grade <= 4){
            poorGrades++
        }

        if (poorGrades === badGrades){
            console.log(`You need a break, ${poorGrades} poor grades.`)
            break;
        }

        //sumScore += command
        numberOfExams ++

        

        if (command === "Enough"){
            
            console.log(`Average score: ${(sumScore / numberOfExams).toFixed(2)}`)
            console.log(`Number of problems: ${numberOfExams}`)
            console.log(`Last problem: ${lastExam}`)
        }
    }




}

exam (["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])