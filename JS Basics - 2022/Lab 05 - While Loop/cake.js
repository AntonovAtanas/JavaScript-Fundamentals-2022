function cake (input){

let index = 0;
let cakeWidth = Number(input[index])
index++

let cakeLength = Number(input[index]);
index++

let command = input[index]
index++

let wholeCake = cakeWidth * cakeLength
let wholeCakeTemp = cakeWidth * cakeLength
let cakeTakenSum = 0;



    while (command !== "STOP"){
        let cakeTaken = Number(command)
        wholeCake = wholeCake - cakeTaken;
        cakeTakenSum += cakeTaken
        

        if (wholeCake < 0){
            console.log(`No more cake left! You need ${Math.abs(wholeCake)} pieces more.`)
            break;
        }
        
        command = input [index]
        index++
        
        
    }
    
    if (command === "STOP"){

        console.log(`${wholeCakeTemp - cakeTakenSum} pieces are left.`)
    }
        
}

cake (["10",

"2",

"2",

"4",

"6",

"STOP"])