function solve() {
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');

    let addButton = document.getElementById('add');
    addButton.addEventListener('click', add);

    // all sections
    let inProgress = document.getElementById('in-progress');
    let open = document.getElementsByTagName('section')[1].children[1]
    let complete = document.getElementsByTagName('section')[3].children[1]

    function add(event) {
        event.preventDefault();

        let task = taskInput.value;
        let description = descriptionInput.value;
        let date = dateInput.value;

        if (date === '' || description === '' || task === '') {
            return;
        }

        let article = elementFactory('article', '', open);
        let h3 = elementFactory('h3', task, article);
        let pDescription = elementFactory('p', `Description: ${description}`, article);
        let pDate = elementFactory('p', `Due Date: ${date}`, article);

        let buttonDiv = elementFactory('div', '', article, { class: 'flex' });
        let startBtn = elementFactory('button', 'Start', buttonDiv, { class: 'green' });
        startBtn.addEventListener('click', start);

        let deleteBtn = elementFactory('button', 'Delete', buttonDiv, { class: 'red' });
        deleteBtn.addEventListener('click', onDelete);

        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';

        function start(){
            startBtn.remove();
            let finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish';
            finishBtn.classList.add('orange');
            finishBtn.addEventListener('click', finish)

            buttonDiv.appendChild(finishBtn);
            inProgress.appendChild(article);
            
        }

        function onDelete(){
            article.remove()
        }

        function finish(){
            buttonDiv.remove();
            complete.appendChild(article);
        }

        function elementFactory(type, content, parent, attributes) {
            let el = document.createElement(type);
            el.textContent = content;

            if (attributes) {
                for (const key in attributes) {
                    el.setAttribute(key, attributes[key])
                }
            };

            if (parent) {
                parent.appendChild(el);
            };

            return el;
        }
    }
}