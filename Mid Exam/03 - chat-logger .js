function chatLogger(input) {

    let chat = [];
    let currentChat = input.shift().split(' ')

    while (currentChat[0] !== "end") {
        let command = currentChat[0];
        let message = currentChat[1];
        let editedVersion = currentChat[2];

        if (command == "Chat") {
            chat.push(message)
        } else if (command == "Delete") {
            let foundMessageIndex = chat.indexOf(message);
            if (chat[foundMessageIndex]) {
                chat.splice(foundMessageIndex, 1)
            }
        } else if (command == "Edit") {
            let foundMessageIndex = chat.indexOf(message);
            if (chat[foundMessageIndex]) {
                chat[foundMessageIndex] = editedVersion;
            }
        } else if (command == "Pin") {
            let foundMessageIndex = chat.indexOf(message);
            if (chat[foundMessageIndex]) {
                let pinnedCommand = chat[foundMessageIndex];
                chat.splice(foundMessageIndex, 1);
                chat.push(pinnedCommand)
            }
        } else if (command == "Spam") {
            for (let i = 1; i < currentChat.length; i++) {
                let spamMessage = currentChat[i];
                chat.push(spamMessage)
            }
        }
        currentChat = input.shift().split(' ')
    }
    console.log(chat.join('\n'))
}

chatLogger(["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"])



