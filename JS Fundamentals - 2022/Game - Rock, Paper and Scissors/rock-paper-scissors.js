const { read } = require('fs');
const { getUnpackedSettings } = require('http2');
const { platform } = require('os');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
const scoreToWin = 3;
let computerScore = 0;
let playerScore = 0;

let recursiveAsyncReadline = function () {
    readline.question(`Rock, paper or scissors? First to ${scoreToWin} wins : `, playerTurn => {
        if (playerTurn == 'Rock' || playerTurn == 'rock') {
            playerTurn = rock;
        } else if (playerTurn == 'Paper' || playerTurn == 'paper') {
            playerTurn = paper;
        } else if (playerTurn == 'Scissors' || playerTurn == 'scissors') {
            playerTurn = scissors;
        } else {
            console.log('Invalid input. Please enter one of the following: "Rock", "Paper" or "Scissors"');
            return recursiveAsyncReadline();
        }

        let computerGuess = Math.floor(Math.random() * 3) + 1;
        let computerTurn = '';

        switch (computerGuess) {
            case 1:
                computerTurn = 'Rock';
                break;
            case 2:
                computerTurn = 'Paper';
                break;
            case 3:
                computerTurn = 'Scissors';
                break;
        }

        console.log(`Computer move is ${computerTurn}`);

        if (computerTurn == playerTurn) {
            console.log(`It's a draw. You both chose ${computerTurn}.`);
            console.log(`Current result: You: ${playerScore} - Computer: ${computerScore}`);
            recursiveAsyncReadline();
        } else if (playerTurn == rock && computerTurn == scissors || playerTurn == paper && computerTurn == rock || playerTurn == scissors && computerTurn == paper) {
            playerScore++
            if (playerScore == scoreToWin) {
                console.log('Congratulations! You have won the game!');
                readline.question('Press "y" and "Enter" if you want to start again. Press "n" and "Enter" to quit the game: ', playerDecision => {
                    if (playerDecision == 'y') {
                        playerScore = 0;
                        computerScore = 0;
                        return recursiveAsyncReadline();
                    } else if (playerDecision == 'n') {
                        return console.log('Thank you for playing');
                    }
                });
            } else {
            console.log(`You win!`);
            console.log(`Current result is You: ${playerScore} - Computer: ${computerScore}. You need ${scoreToWin - playerScore} more to win the game`);
            }
            recursiveAsyncReadline();
        } else {
            computerScore++
            if (computerScore == scoreToWin) {
                console.log('You have lost.');
                readline.question('Press "y" and "Enter" if you want to start again. Press "n" and "Enter" to quit the game: ', playerDecision => {
                    if (playerDecision == 'y') {
                        playerScore = 0;
                        computerScore = 0;
                        return recursiveAsyncReadline();
                    } else if (playerDecision == 'n') {
                        return console.log('Thank you for playing');
                    }
                });
            } else {
            console.log(`Computer wins!`);
            console.log(`Current result is You: ${playerScore} - Computer: ${computerScore}. Computer needs ${scoreToWin - computerScore} more to win the game`);
        }
            recursiveAsyncReadline();
        }
        readline.question();
    });
}
recursiveAsyncReadline();