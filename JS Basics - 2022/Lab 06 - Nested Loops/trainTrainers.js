function trainTrainers (input){

    let index = 0;
    let juryCount = Number(input[index])
    index++
    let presentationName = input[index]
    index++

    let sumAllPresentations = 0;
    let gradeCounter = 0;

    while (presentationName !== "Finish"){
        

        let presentationCounter = 0;
        let sumResult = 0;

        for (let i = 0 ; i < juryCount ; i++){
            let presentationResult = Number(input[index]);
            index++
            presentationCounter += presentationResult
            gradeCounter ++;
            sumResult = presentationCounter / juryCount
           
        }
        
       
        console.log(`${presentationName} - ${(sumResult).toFixed(2)}.`)

        sumAllPresentations += presentationCounter
        

        presentationName = input[index]
        index++
    }
    
    console.log(`Student's final assessment is ${(sumAllPresentations / gradeCounter).toFixed(2)}.`)

}

trainTrainers (["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])