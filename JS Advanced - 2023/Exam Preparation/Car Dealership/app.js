window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuel = document.getElementById('fuel');
  const cost = document.getElementById('original-cost');
  const price = document.getElementById('selling-price');

  let tableBody = document.getElementById('table-body');
  let carsList = document.getElementById('cars-list');
  let totalProfit = document.getElementById('profit');

  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publish);

  function publish(e) {
    e.preventDefault()
    if (make.value == '' || model.value == '' || year.value == '' || fuel.value == '' || cost.value == '' || price.value < cost.value || price.value == '') { //edge
      return
    };

    let trWrapper = document.createElement('tr');
    trWrapper.classList.add('row');

    let tdMake = document.createElement('td');
    tdMake.textContent = make.value;

    let tdModel = document.createElement('td');
    tdModel.textContent = model.value;

    let tdYear = document.createElement('td');
    tdYear.textContent = year.value;

    let tdFuel = document.createElement('td');
    tdFuel.textContent = fuel.value;

    let tdCost = document.createElement('td');
    tdCost.textContent = cost.value;

    let tdPrice = document.createElement('td');
    tdPrice.textContent = price.value;

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    // edit button
    editBtn.addEventListener('click', (event) => {
      make.value = tdMake.textContent;
      model.value = tdModel.textContent;
      year.value = tdYear.textContent;
      fuel.value = tdFuel.textContent;
      cost.value = tdCost.textContent;
      price.value = tdPrice.textContent;

      event.target.parentElement.parentElement.remove();
    })

    let sellBtn = document.createElement('button');
    sellBtn.textContent = 'Sell';
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');
    // sell button
    sellBtn.addEventListener('click', (event) => {
      let li = document.createElement('li');
      li.classList.add('each-list');

      let carAndModel = document.createElement('span');
      carAndModel.textContent = event.target.parentElement.parentElement.children[0].textContent + ' ' + event.target.parentElement.parentElement.children[1].textContent // ?

      let productionYEar = document.createElement('span');
      productionYEar.textContent = event.target.parentElement.parentElement.children[2].textContent;

      let profit = document.createElement('span');
      profit.textContent = `${Number(event.target.parentElement.parentElement.children[5].textContent) - Number(event.target.parentElement.parentElement.children[4].textContent)}`;

      totalProfit.textContent = `${(Number(totalProfit.textContent) + Number(profit.textContent)).toFixed(2)}`

      li.appendChild(carAndModel);
      li.appendChild(productionYEar);
      li.appendChild(profit);

      carsList.appendChild(li);
      event.target.parentElement.parentElement.remove();
    })

    let buttonWrapper = document.createElement('td');
    buttonWrapper.appendChild(editBtn);
    buttonWrapper.appendChild(sellBtn);

    trWrapper.appendChild(tdMake);
    trWrapper.appendChild(tdModel);
    trWrapper.appendChild(tdYear);
    trWrapper.appendChild(tdFuel);
    trWrapper.appendChild(tdCost);
    trWrapper.appendChild(tdPrice);
    trWrapper.appendChild(buttonWrapper);

    tableBody.appendChild(trWrapper);

    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = ''; // edge?
    cost.value = '';
    price.value = '';
  }
}
