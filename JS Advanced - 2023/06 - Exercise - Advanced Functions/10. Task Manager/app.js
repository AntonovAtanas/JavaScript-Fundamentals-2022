function solve() {
    document.getElementById('add').addEventListener('click', add);
    let openSectionDiv = document.getElementsByTagName('section')[1].children[1];
    let inProgressDiv = document.getElementById('in-progress');
    let finishSectionDiv = document.getElementsByTagName('section')[3].children[1];

    function add(event) {
        event.preventDefault();
        let task = document.getElementById('task');
        let description = document.getElementById('description')
        let date = document.getElementById('date')

        if (task.value !== '' && description.value !== '' && date.value !== '') {
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            let descriptionP = document.createElement('p');
            let dateP = document.createElement('p');
            let div = document.createElement('div');
            let startButton = document.createElement('button')
            startButton.addEventListener('click', start);
            let deleteButton = document.createElement('button')
            deleteButton.addEventListener('click', deleteOpen);

            h3.textContent = task.value;
            descriptionP.textContent = `Description: ${description.value}`;
            dateP.textContent = `Due Date: ${date.value}`;
            startButton.textContent = 'Start';
            deleteButton.textContent = 'Delete';

            div.className = 'flex';
            startButton.className = 'green';
            deleteButton.className = 'red';

            article.appendChild(h3);
            article.appendChild(descriptionP);
            article.appendChild(dateP);

            div.appendChild(startButton);
            div.appendChild(deleteButton);

            article.appendChild(div);

            openSectionDiv.appendChild(article);

            task.value = '';
            description.value = '';
            date.value = '';
        }

        function deleteOpen(event) {
            event.target.parentElement.parentElement.remove();
        };

        function start(event) {
            event.target.parentElement.children[0].textContent = 'Delete'; // making the Delete button
            event.target.parentElement.children[0].removeEventListener('click', start);
            event.target.parentElement.children[0].addEventListener('click', deleteOpen);

            event.target.parentElement.children[1].textContent = 'Finish' // making the Finish button
            event.target.parentElement.children[1].className = 'orange'
            event.target.parentElement.children[1].removeEventListener('click', deleteOpen);
            event.target.parentElement.children[1].addEventListener('click', finish);

            inProgressDiv.appendChild(event.target.parentElement.parentElement);
        }

        function finish(event) {
            finishSectionDiv.appendChild(event.target.parentElement.parentElement);
            event.target.parentElement.remove();
        }
    }
}