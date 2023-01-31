function addItem() {
    let inputText = document.getElementById('newItemText');
    let itemsUlField = document.getElementById('items');
    let newItem = document.createElement('li');
    let deleteButton = document.createElement('a');
    newItem.textContent = inputText.value;
    deleteButton.textContent = '[Delete]';
    itemsUlField.appendChild(newItem);
    newItem.appendChild(deleteButton);
    deleteButton.href = '#';
    deleteButton.addEventListener('click', deleteLi);

    inputText.value = '';
}

function deleteLi(event) { // ask why do i see "PointerEvent" on Chrome but on FireFox i see "ClickEvent"
    event.target.parentElement.remove()
}