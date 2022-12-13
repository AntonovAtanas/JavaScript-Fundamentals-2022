function moving (input){

let index = 0;
let apartmentSpaceW = Number(input[index])
index++
let apartmentSpaceL = Number(input[index])
index++
let apartmentSpaceH = Number(input[index])
index++

let command = input[index]
index++

let apartmentSpace = apartmentSpaceW * apartmentSpaceL * apartmentSpaceH
let apartmentSpaceCounter = 0;

    while(command !== "Done"){
        let boxes = Number(command)
        apartmentSpaceCounter += boxes
        

        if (apartmentSpaceCounter > apartmentSpace){
            console.log(`No more free space! You need ${Math.abs(apartmentSpaceCounter - apartmentSpace)} Cubic meters more.`)
            break;
        }

        command = input [index]
        index++
    }

    if (command === "Done"){

        console.log(`${apartmentSpace - apartmentSpaceCounter} Cubic meters left.`)
    }



}

moving (["10",

"1",

"2",

"4",

"6",

"Done"])