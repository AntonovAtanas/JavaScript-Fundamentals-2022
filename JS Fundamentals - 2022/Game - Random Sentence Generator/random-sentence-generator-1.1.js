const { get } = require('http');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let names = ["Mariya", "Atanas", "Ani", "Stanislav"];
let city = ["Sofia", "Plovdiv", "Pazardzhik", "Stara Zagora"];
let verbs = ["eats", "holds", "sees", "plays with", "brings"];
let nouns = ["stones", "cake", "apple", "laptop", "bikes"];
let adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"];
let details = ["near the river", "at home", "in the park", "in Koprivshtitsa"];

function getRandom(names) {
    let arrayLength = names.length;
    let randomWord = names[Math.floor(Math.random() * arrayLength)];
    return randomWord
}
getRandom(names);

function randomMessage() {

    let randomName = getRandom(names);
    let randomCity = getRandom(city);
    let randomVerbs = getRandom(verbs);
    let randomNouns = getRandom(nouns);
    let randomAdverbs = getRandom(adverbs);
    let randomDetails = getRandom(details);

    let whoFromWhere = `${randomName} from ${randomCity}`;
    let action = `${randomAdverbs} ${randomVerbs} ${randomNouns}`;

    let finalSentence = `${whoFromWhere} ${action} ${randomDetails}`;

    return finalSentence
}
let result = randomMessage()

let welcomeMessage = `This is your first random-generated message`;

console.log(welcomeMessage)
console.log(result)

let recursiveAsyncReadLine = function () {

    readline.question(`Click "Y" for new sentence and "N" for exit.`, string => {

        if (string == "Y" || string == "y") {
            console.log(result = randomMessage())
            recursiveAsyncReadLine();

        } else if (string == "N" || string == "n") {
            console.log("Bye, bye!")
            return readline.close()
        } else {
            console.log(`Please enter valid command!`);
            recursiveAsyncReadLine();
        }
    })
}
recursiveAsyncReadLine()


