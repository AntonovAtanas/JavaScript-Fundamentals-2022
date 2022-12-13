function cake (input){

    let index = 0;
    let cakeWidth = Number(input[index]);
    index++

    let cakeLength = Number(input[index]);
    index++

    let command = input[index];
    index++

    let allPieces = cakeWidth * cakeLength;

    while (command !== "STOP"){
        let cakeTaken = Number(command);

        allPieces-= cakeTaken;

        if (allPieces < 0){
            console.log(`No more cake left! You need ${Math.abs(allPieces)} pieces more.`)
            break;
        }

        command = input[index];
        index++
    }

    if (command === "STOP"){
    console.log(`${allPieces} pieces are left.`)
    }
}

cake 

// (["10",

// // "10",

// // "20",

// // "20", "20", "20", "21"])



(["10",

"2",

"2",

"4",

"6",

"STOP"])