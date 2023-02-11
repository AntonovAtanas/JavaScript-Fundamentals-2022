function solve() {

  let inputField = document.getElementsByTagName('textarea')[0];
  let outputField = document.getElementsByTagName('textarea')[1];

  document.getElementsByTagName('button')[0].addEventListener('click', generate);
  document.getElementsByTagName('button')[1].addEventListener('click', buy);;

  let itemsTable = document.getElementsByTagName('tbody')[0];

  function generate() {
    let inputText = JSON.parse(inputField.value);
    for (const iterator of inputText) {
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      let img = document.createElement('img');
      let name = document.createElement('p');
      let price = document.createElement('p');
      let decoratorFactor = document.createElement('p');
      let inputCheckbox = document.createElement('input');

      img.src = `${iterator.img}`;
      name.textContent = iterator.name;
      price.textContent = iterator.price;
      decoratorFactor.textContent = iterator.decFactor;
      inputCheckbox.type = 'checkbox'; 

      td.appendChild(img);
      tr.appendChild(td);
      td = document.createElement('td');
      td.appendChild(name);
      tr.appendChild(td)
      td = document.createElement('td');
      td.appendChild(price);
      tr.appendChild(td)
      td = document.createElement('td');
      td.appendChild(decoratorFactor);
      tr.appendChild(td)
      td = document.createElement('td');
      td.appendChild(inputCheckbox);
      tr.appendChild(td)

      itemsTable.appendChild(tr);
    }

  }

  function buy() {
    let items = Array.from(document.querySelectorAll('tbody tr'));
    let purchased = { name: [], price: 0, decorationFactor: 0 }

    items.forEach(item => {
      let checkBox = item.children[4];

      if (checkBox.children[0].checked) {
        let itemName = item.children[1].children[0].textContent;
        let itemPrice = Number(item.children[2].children[0].textContent);
        let decorator = Number(item.children[3].children[0].textContent);

        purchased.name.push(itemName);
        purchased.price += itemPrice;
        purchased.decorationFactor += decorator;
      }
    })
    purchased.decorationFactor = purchased.decorationFactor / purchased.name.length;
    outputField.textContent = `Bought furniture: ${purchased.name.join(', ')}`;
    outputField.textContent += `\nTotal price: ${purchased.price.toFixed(2)}`;
    outputField.textContent += `\nAverage decoration factor: ${purchased.decorationFactor}`
  }

}