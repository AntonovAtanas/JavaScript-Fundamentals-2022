function solve() {
    let recipientInput = document.getElementById('recipientName');
    let titleInput = document.getElementById('title');
    let messageInput = document.getElementById('message');

    let mailList = document.getElementById('list');
    let sentList = document.getElementsByClassName('sent-list')[0];
    let deleteList = document.getElementsByClassName('delete-list')[0];

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);

    let resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', reset);

    function reset(e) {
        e.preventDefault();
        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }

    function add(e) {
        e.preventDefault();

        if (recipientInput.value == '' || titleInput == '' || messageInput == '') {
            return;
        }

        let titleh4 = document.createElement('h4');
        titleh4.textContent = `Title: ${titleInput.value}`;

        let recipienth4 = document.createElement('h4');
        recipienth4.textContent = `Recipient Name: ${recipientInput.value}`;

        let messageSpan = document.createElement('span');
        messageSpan.textContent = messageInput.value;

        let buttonsDiv = document.createElement('div');
        buttonsDiv.id = 'list-action';

        let sendBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.addEventListener('click', (e) => {

            let spanTo = document.createElement('span');
            let recipientText = recipienth4.textContent.split('Recipient Name: ')[1]
            spanTo.textContent = `To: ${recipientText}`;

            let spanTitle = document.createElement('span');
            spanTitle.textContent = `${titleh4.textContent}`;

            let divBtn = document.createElement('div');
            divBtn.classList.add('btn');

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete');
            deleteBtn.type = 'submit';
            deleteBtn.addEventListener('click', (e) => {
                let li = document.createElement('li');

                let recipientText = recipienth4.textContent.split('Recipient Name: ')[1]
                let spanTo = document.createElement('span');
                spanTo.textContent = `To: ${recipientText}`;
    
                let spanTitle = document.createElement('span');
                spanTitle.textContent = `${titleh4.textContent}`;
    
                li.appendChild(spanTo);
                li.appendChild(spanTitle);
    
                deleteList.appendChild(li);
    
    
                e.target.parentElement.parentElement.remove()
            })

            let li = document.createElement('li');
            divBtn.appendChild(deleteBtn)

            li.appendChild(spanTo);
            li.appendChild(spanTitle);
            li.appendChild(divBtn);

            sentList.appendChild(li);
            e.target.parentElement.parentElement.remove();
        })

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';
        deleteBtn.addEventListener('click', (e) => {
            let li = document.createElement('li');

            let recipientText = recipienth4.textContent.split('Recipient Name: ')[1]
            let spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipientText}`;

            let spanTitle = document.createElement('span');
            spanTitle.textContent = `${titleh4.textContent}`;

            li.appendChild(spanTo);
            li.appendChild(spanTitle);

            deleteList.appendChild(li);


            e.target.parentElement.parentElement.remove()
        })

        buttonsDiv.appendChild(sendBtn);
        buttonsDiv.appendChild(deleteBtn);

        let mainLi = document.createElement('li');

        mainLi.appendChild(titleh4);
        mainLi.appendChild(recipienth4);
        mainLi.appendChild(messageSpan);
        mainLi.appendChild(buttonsDiv);

        mailList.appendChild(mainLi)

        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }
}
solve()