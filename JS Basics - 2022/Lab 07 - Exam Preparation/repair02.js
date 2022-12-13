function repair(input) {

    let index = 0;
    let h = Number(input[index]);
    index++

    let w = Number(input[index]);
    index++

    let percentageWindows = Number(input[index]);
    index++

    let wallsSpace = (h * w * 4)

    let totalForPainting = Math.ceil(wallsSpace - (wallsSpace * percentageWindows) / 100)
    let sumPainted = 0;
    let command = input[index]
    index++




    while (command !== "Tired!") {

        let paint = Number(command)
        totalForPainting -= paint


        if (totalForPainting < 0) {
            console.log(`All walls are painted and you have ${Math.abs(totalForPainting)} l paint left!`)
            break;
            
        } else if (totalForPainting === 0) {
            console.log(`All walls are painted! Great job, Pesho!`)
            break;
            
        }


        command = input[index]
        index++

        if (command === "Tired!") {
            console.log(`${totalForPainting - sumPainted} quadratic m left.`)
        }

    }



}

repair(["2",

"3",

"25",

"6",

"7",

"8"])