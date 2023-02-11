function encodeAndDecodeMessages() {
    let messageText = document.querySelectorAll('main div textarea')[0];
    let receivedMessageText = document.querySelectorAll('main div textarea')[1];

    document.querySelectorAll('main div button')[0].addEventListener('click', encode);
    document.querySelectorAll('main div button')[1].addEventListener('click', decode);
    
    function encode() {
        let message = messageText.value;
        let encryptedText = '';
        for (const iterator of message) {
            let charNumber = iterator.charCodeAt() + 1;
            let encryptedChar = String.fromCharCode(charNumber);
            encryptedText += encryptedChar;
        }
        receivedMessageText.textContent = encryptedText;
        messageText.value = '';
    }

    function decode() {
        let message = receivedMessageText.textContent;
        let decryptedText = '';
        receivedMessageText.textContent = '';
        for (const iterator of message) {
            let charNumber = iterator.charCodeAt() - 1;
            let decryptedChar = String.fromCharCode(charNumber);
            decryptedText += decryptedChar;
        }
        receivedMessageText.textContent = decryptedText;
    }
    
}