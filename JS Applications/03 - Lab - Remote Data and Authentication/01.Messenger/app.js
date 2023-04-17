function attachEvents() {
    const textContainer = document.getElementById('messages');
    const nameInput = document.querySelector('input[name="author"]');
    const messageInput = document.querySelector('input[name="content"]');

    let sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', sendMessage);

    let refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', refresh);

    const URL = 'http://localhost:3030/jsonstore/messenger';

    async function sendMessage() {
        let obj = {
            author: `${nameInput.value}`,
            content: `${messageInput.value}`
        };
        try {
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
        } catch (error) {
            console.log(error)
        }

        nameInput.value = '';
        messageInput.value = '';
    };

    async function refresh() {
        try {
            let res = await fetch(URL);
            let data = Object.values(await res.json());

            let allMessages = [];

            data.forEach(element => {
                let message = `${element.author}: ${element.content}`;
                allMessages.push(`${message}`);
                textContainer.textContent = allMessages.join('\n')
            });

        } catch (error) {
            console.log(error)
        }
    }
}

attachEvents();