let inputText = document.getElementById('newItemText');
let itemsUlField = document.getElementById('items');

itemsUlField.addEventListener('click', deleteLi);

function addItem() {

    let newItem = document.createElement('li');
    let deleteButton = document.createElement('a');
    
    newItem.textContent = inputText.value;
    deleteButton.textContent = '[Delete]';

    itemsUlField.appendChild(newItem);
    newItem.appendChild(deleteButton);
    deleteButton.href = '#';

    inputText.value = '';
}

function deleteLi(event) { // ask why do i see "PointerEvent" on Chrome but on FireFox i see "ClickEvent"
    if (event.target.tagName == 'A'){ //tag strings needs to be all caps
        event.target.parentElement.remove();
    }
}