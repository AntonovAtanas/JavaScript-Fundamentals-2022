const url = 'http://localhost:3030/jsonstore/collections/books';

const bookList = document.querySelector("tbody");

let titleInput = document.querySelector("input[name='title']");
let authorInput = document.querySelector("input[name='author']");

let formTitle = document.querySelector("h3");

// need to add event listeners to the already generated books in the HTML?
let submitBtn = document.querySelector("form button");
submitBtn.addEventListener('click', submit);

let loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', load);

async function load() {
    let response = await fetch(url);
    let data = Object.entries(await response.json());

    bookList.innerHTML = ''

    data.forEach(book => {
        // book info
        let tr = elementFactory('tr', '', bookList);
        let tdBook = elementFactory('td', `${book[1].title}`, tr);
        tdBook.setAttribute('id', book[1]._id);
        let tdAuthor = elementFactory('td', `${book[1].author}`, tr);
        let tdButton = elementFactory('td', '', tr);

        //edit button
        let editBtn = elementFactory('button', 'Edit', tdButton);
        editBtn.addEventListener('click', edit);

        //delete button
        let deleteBtn = elementFactory('button', 'Delete', tdButton);
        deleteBtn.addEventListener('click', del);
    })
}

function elementFactory(type, content, parent) {
    let el = document.createElement(type);
    el.textContent = content;
    if (parent) {
        parent.appendChild(el);
    };

    return el;
}

async function edit(event) {
    event.preventDefault()
    formTitle.textContent = 'Edit FORM';
    submitBtn.textContent = 'Save';

    let title = event.currentTarget.parentElement.parentElement.children[0].textContent;
    let author = event.currentTarget.parentElement.parentElement.children[1].textContent;

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('');
        }
        let book = Object.entries(await response.json());

        let foundID

        book.forEach(element => {
            if (element[1].author === author && element[1].title === title) {
                foundID = element[0];
                titleInput.value = element[1].title;
                authorInput.value = element[1].author;
            }
        });

        let urlID = `${url}/${foundID}`;

        // remove event listener for add
        submitBtn.removeEventListener('click', submit)

        let saveBtn = document.querySelector("form button")
        saveBtn.addEventListener('click', editBook)

        async function editBook() {
            await fetch(urlID, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "author": titleInput.value,
                    "title": authorInput.value
                })
            })
        };

        load();

        // submitBtn.removeEventListener('click', editBook)
        // submitBtn.addEventListener('click', submit);

    } catch (error) {
        console.log(error)
    }
}

async function del(event) {
    const bookId = event.target.parentElement.parentElement.children[0].id;
    let deleteURL = `${url}/${bookId}`;

    await fetch(deleteURL, {
        method: 'DELETE'
    });

    event.target.parentElement.parentElement.remove();
}

async function submit(ev) {
    ev.preventDefault();

    if (titleInput.value == '' || authorInput.value == '') {
        return;
    }

    let newBook = {
        author: authorInput.value,
        title: titleInput.value
    };

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newBook)
    });

    titleInput.value = '';
    authorInput.value = '';

    // need to load again the list?
}

