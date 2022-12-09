function login(input) {

    let index = 0;
    let username = input[index];
    index++

    let usernameSplit = username.split("");
    let usernameReverse = usernameSplit.reverse();
    let password = usernameSplit.join("");

    let command = input[index];
    index++

    let counter = 0;

    while (command !== password) {

        counter += 1

        if (counter === 4) {
            console.log(`User ${username} blocked!`)
            break;
        }
        console.log(`Incorrect password. Try again.`)
        command = input[index];
        index++
    }


    if (command === password) {
        console.log(`User ${username} logged in.`)
    }

}

login(['Acer','login','go','let me in','recA'])