import { html, render } from '../node_modules/lit-html/lit-html.js';

let body = document.querySelector('body');

let button = () => html`
<button id="loadBooks" @click=${loadAllBooks}>LOAD ALL BOOKS</button>
`

let table = () => html
    `
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
`

let addBook = () => html
    `
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit" id="addBookFunction">
</form>

<form id="edit-form" style="display: none">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" id="edit-title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" id="edit-author" placeholder="Author...">
    <input type="submit" value="Save" id="edit-book">
</form>
`


render([button(), table(), addBook()], body);

document.getElementById('add-form').addEventListener('click', onAddBook);


let tableBody = document.querySelector('tbody');

let tableData = (loadAllBooks) => html
    `
${loadAllBooks.map(book => html`
<tr id=${book[0]}>
    <td>${book[1].title}</td>
    <td>${book[1].author}</td>
    <td>
        <button @click="${edit}">Edit</button>
        <button @click="${deleteBook}">Delete</button>
    </td>
</tr>
`)}
`

async function loadAllBooks() {
    let response = await fetch('http://localhost:3030/jsonstore/collections/books');
    let data = await response.json();

    render(tableData(Object.entries(data)), tableBody);
    return data
}

function edit(event) {
    event.preventDefault();
    document.getElementById('add-form').style.display = 'none';
    document.getElementById('edit-form').style.display = 'block';

    let id = event.target.parentElement.parentElement.id;

    let title = document.getElementById('edit-title')
    title.value = event.target.parentElement.parentElement.children[0].textContent;

    let author = document.getElementById('edit-author')
    author.value = event.target.parentElement.parentElement.children[1].textContent;

    document.getElementById('edit-book').addEventListener('click', async () => {
        let response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({author: author.value, title: title.value})
        })
        let data = response.json();
        return data
    })
}

async function deleteBook (event){
    event.preventDefault();
    let id = event.target.parentElement.parentElement.id;

    let response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'DELETE'
    })
    let data = response.json();
    

    render([button(), table(), addBook()], body); // edge?
    return data;
}

async function onAddBook(event){
    event.preventDefault();

    let {title, author} = Object.fromEntries(new FormData(event.currentTarget));

    if(title !== '' && author !== ''){
        let response = await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, author})
        })
        let data = response.json();
        return data;

        render([button(), table(), addBook()], body);
    }
}
