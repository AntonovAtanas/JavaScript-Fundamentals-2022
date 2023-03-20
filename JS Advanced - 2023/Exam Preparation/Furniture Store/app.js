window.addEventListener('load', solve);

function solve() {
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');

    let furnitureList = document.getElementById('furniture-list');

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault()
        if (modelInput.value !== '' && descriptionInput.value !== '' && yearInput.value > 0 && priceInput.value > 0) {  // >= 0 ?
            let trInfo = document.createElement('tr');
            trInfo.classList.add('info')

            let trHide = document.createElement('tr');
            trHide.classList.add('hide')

            let tdButtons = document.createElement('td');

            // Model
            let tdModel = document.createElement('td');
            tdModel.textContent = modelInput.value;

            // Price
            let tdPrice = document.createElement('td');
            tdPrice.textContent = Number(priceInput.value).toFixed(2)

            // buttons
            let btnMore = document.createElement('button');
            btnMore.textContent = 'More Info';
            btnMore.classList.add('moreBtn');
            btnMore.addEventListener('click', show)

            let btnBuy = document.createElement('button');
            btnBuy.textContent = 'Buy it';
            btnBuy.classList.add('buyBtn');
            btnBuy.addEventListener('click', buy)

            tdButtons.appendChild(btnMore);
            tdButtons.appendChild(btnBuy);

            //hide field
            let tdYear = document.createElement('td');
            tdYear.textContent = `Year: ${yearInput.value}`

            let tdDescription = document.createElement('td');
            tdDescription.textContent = `Description: ${descriptionInput.value}`;
            tdDescription.colSpan = '3' // ??

            trHide.appendChild(tdYear);
            trHide.appendChild(tdDescription);

            // Final append
            trInfo.appendChild(tdModel);
            trInfo.appendChild(tdPrice);
            trInfo.appendChild(tdButtons);

            furnitureList.appendChild(trInfo);
            furnitureList.appendChild(trHide);

            // clear input fields
            modelInput.value = '';
            yearInput.value = '';
            descriptionInput.value = '';
            priceInput.value = '';

        }

        function show(e) {
            e.target.textContent = 'Less Info';
            let hiddenInfo = document.getElementsByClassName('hide')[0];
            hiddenInfo.style.display = 'contents';

            let lessInfoBtn = document.getElementsByClassName('moreBtn')[0];
            lessInfoBtn.removeEventListener('click', show)
            lessInfoBtn.addEventListener('click', less);
        };

        function less(e) {
            e.target.textContent = 'More Info';
            let hiddenInfo = document.getElementsByClassName('hide')[0];
            hiddenInfo.style.display = 'none';

            let lessInfoBtn = document.getElementsByClassName('moreBtn')[0];
            lessInfoBtn.removeEventListener('click', less)
            lessInfoBtn.addEventListener('click', show);
        }

        function buy() {
            let rowToDelete = document.getElementsByClassName('info')[0];
            let totalPrice = document.getElementsByClassName('total-price')[0];
            let itemPrice = document.getElementsByClassName('info')[0].children[1].textContent;
            totalPrice.textContent = (Number(totalPrice.textContent) + Number(itemPrice)).toFixed(2);
            rowToDelete.remove()
        }
    }
}
