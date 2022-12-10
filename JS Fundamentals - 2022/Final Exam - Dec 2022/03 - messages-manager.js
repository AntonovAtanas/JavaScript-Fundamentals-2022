function messagesManger(input) {

    let capacity = Number(input.shift());
    let command = input.shift();
    let object = {}

    while (command !== 'Statistics') {
        if (command.includes('Add')) {
            let [currentCommand, username, sent, received] = command.split('=');
            sent = Number(sent);
            received = Number(received);
            if (!object.hasOwnProperty(username)) {
                object[username] = { sent, received };
            }
        } else if (command.includes('Message')) { 
            let [currentCommand, sender, receiver] = command.split('=');
            if (object.hasOwnProperty(sender) && object.hasOwnProperty(receiver)) {
                object[sender].sent += 1;
                object[receiver].received += 1;

                if (object[sender].sent + object[sender].received >= capacity) {
                    console.log(`${sender} reached the capacity!`);
                    delete object[sender];
                }
                if (object[receiver].sent + object[receiver].received >= capacity) {
                    console.log(`${receiver} reached the capacity!`);
                    delete object[receiver];
                }
            }

        } else if (command.includes('Empty')) {
            let [currentCommand, username] = command.split('=');
            if (username == 'All') {
                object = {};
            } else {
                if (object.hasOwnProperty(username)) {
                    delete object[username];
                }
            }
        }
        command = input.shift();
    }

    let usersCount = Object.keys(object).length;
    console.log(`Users count: ${usersCount}`)

    for (const person in object) {
        console.log(`${person} - ${object[person].sent + object[person].received}`)
    }
}

messagesManger

    // (["10",
    // "Add=Berg=9=0",
    // "Add=Kevin=0=0",
    // "Message=Berg=Kevin",
    // "Add=Mark=5=4",
    // "Statistics"])

    // (["20",
    // "Add=Mark=3=9",
    // "Add=Berry=5=5",
    // "Add=Clark=4=0",
    // "Empty=Berry",
    // "Add=Blake=9=3",
    // "Add=Michael=3=9",
    // "Add=Amy=9=9",
    // "Message=Blake=Amy",
    // "Message=Michael=Amy",
    // "Statistics"])

    (["12",
        "Add=Bonnie=3=5",
        "Add=Johny=4=4",
        "Empty=All",
        "Add=Bonnie=3=3",
        "Statistics"])


