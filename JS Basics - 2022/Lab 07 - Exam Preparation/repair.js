function repair (input){

    let index = 0;
    let h = Number(input[index]);
    index ++ 
    
    let w = Number(input[index]);
    index ++ 

    let percentageWindows = Number(input[index]);
    index ++

    let wallsSpace = (h * w * 4)

    let totalForPainting = Math.ceil(wallsSpace - (wallsSpace * percentageWindows) / 100)
    let sumPainted = 0;
    let command = input[index]
    
    

    
    while (command !== "Tired!"){

       for (let i = 1 ; i <= 3 ; i++){
        command = Number(input[index])
        sumPainted += command
        index++
        if (sumPainted > totalForPainting){
            console.log(`All walls are painted and you have ${sumPainted - totalForPainting} l paint left!`)
            return;
        } else if (totalForPainting === sumPainted) {
            console.log(`All walls are painted! Great job, Pesho!`)
            return;
        }
       }
       

       command = input[index]
       index++

       if (command === "Tired!"){
        console.log(`${totalForPainting - sumPainted} quadratic m left.`)
       }
       
    }
    


}

repair (["2",

"3",

"25",

"6",

"7",

"8"])