const url = 'http://localhost:3030/jsonstore/collections/students';

const firstNameInput = document.querySelector("input[name='firstName']");
const lastNameInput = document.querySelector("input[name='lastName']");
const facultyNumberInput = document.querySelector("input[name='facultyNumber']");
const gradeInput = document.querySelector("input[name='grade']");
const tBody = document.querySelector("tbody");

let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', submit);

window.addEventListener('load', load())

async function submit(ev) {
    ev.preventDefault()

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            facultyNumber: facultyNumberInput.value,
            grade: gradeInput.value
        })
    });

    let tr = elementFactory('tr', '', tBody);
    let name = elementFactory('td', `${firstNameInput.value}`, tr);
    let lastName = elementFactory('td', `${lastNameInput.value}`, tr);
    let num = elementFactory('td', `${(facultyNumberInput.value).toString()}`, tr);
    let grade = elementFactory('td', `${gradeInput.value}`, tr);

    tBody.innerHTML = '';
    firstNameInput.value = '';
    lastNameInput.value = '';
    facultyNumberInput.value = '';
    gradeInput.value = '';

    load();
}

function elementFactory(type, content, parent) {
    let el = document.createElement(type);
    el.textContent = content;
    if (parent) {
        parent.appendChild(el);
    };

    return el;
}

function load() {
    fetch(url)
        .then(request => {
            if (!request.ok) {
                throw new Error('Error')
            };
            return request.json()
        })
        .then(response => {

            let data = Object.entries(response);

            data.forEach(element => {
                let tr = elementFactory('tr', '', tBody);
                let name = elementFactory('td', `${element[1].firstName}`, tr);
                let lastName = elementFactory('td', `${element[1].lastName}`, tr);
                let num = elementFactory('td', `${element[1].facultyNumber}`, tr);
                let grade = elementFactory('td', `${element[1].grade}`, tr);
            })
        })
}