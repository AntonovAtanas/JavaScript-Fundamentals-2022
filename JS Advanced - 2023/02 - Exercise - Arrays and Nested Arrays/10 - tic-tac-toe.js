function ticTacToe(input) {

    let initialDashboard =

        [[false, false, false],

        [false, false, false],

        [false, false, false]];

    let isFirstPlayer = true;

    for (const moves of input) {
        let [rowMove, columnMove] = moves.split(' ');

        if (initialDashboard[rowMove][columnMove] == false) {
            let marker = '';
            if (isFirstPlayer) {
                marker = 'X';
            } else {
                marker = 'O';
            }
            initialDashboard[rowMove][columnMove] = marker;
            isFirstPlayer = !isFirstPlayer;

            for (let i = 0; i < 3; i++) {
                // Horizontal check
                if (initialDashboard[i].every(value => value === marker)) {
                    console.log(`Player ${marker} wins!`);
                    initialDashboard.forEach(row => console.log(row.join('\t')))
                    return;
                }

                //Vertical check
                if (initialDashboard[0][i] === marker && initialDashboard[1][i] === marker && initialDashboard[2][i] === marker) {
                    console.log(`Player ${marker} wins!`);
                    initialDashboard.forEach(row => console.log(row.join('\t')))
                    return;
                }
            }

            //Main diagonal check
            if (initialDashboard[0][0] === marker && initialDashboard[1][1] === marker && initialDashboard[2][2] === marker) {
                console.log(`Player ${marker} wins!`);
                initialDashboard.forEach(row => console.log(row.join('\t')))
                return;
            }

            //Secondary diagonal check
            if (initialDashboard[0][2] === marker && initialDashboard[1][1] === marker && initialDashboard[2][0] === marker) {
                console.log(`Player ${marker} wins!`);
                initialDashboard.forEach(row => console.log(row.join('\t')))
                return;
            }

        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        if (!checkFreeSpace(initialDashboard)){
            console.log(`The game ended! Nobody wins :(`);
            initialDashboard.forEach(row => console.log(row.join('\t')))
            return;
        }
    }

    function checkFreeSpace(initialDashboard){
        for (let row = 0; row < initialDashboard.length; row ++){
            for (let col = 0; col < initialDashboard[row].length; col++){
                if (!initialDashboard[row][col]){
                    return true;
                }
            }
        }
        return false;
    }
}

ticTacToe(
    ["0 1",

        "0 0",

        "0 2",

        "2 0",

        "1 0",

        "1 1",

        "1 2",

        "2 2",

        "2 1",

        "0 0"]
)

ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);

ticTacToe(["0 1",

    "0 0",

    "0 2",

    "2 0",

    "1 0",

    "1 2",

    "1 1",

    "2 1",

    "2 2",

    "0 0"])