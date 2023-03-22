window.addEventListener('load', solve);

function solve() {
    const productType = document.getElementById('type-product');
    const descriptionInput = document.getElementById('description');
    const nameInput = document.getElementById('client-name');
    const phoneInput = document.getElementById('client-phone');

    const sendFormBtn = document.querySelector('button[type="submit"]');
    sendFormBtn.addEventListener('click', send);

    const ordersSection = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');

    function send (ev){
        ev.preventDefault();

        if(descriptionInput.value === '' || nameInput.value === '' || phoneInput.value === ''){
            return;
        }

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${productType.value}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${nameInput.value}, ${phoneInput.value}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${descriptionInput.value}`;

        let startBtn = document.createElement('button');
        startBtn.textContent = 'Start repair';
        startBtn.classList.add('start-btn');
        startBtn.addEventListener('click', () => {
            finishBtn.disabled = false;
            startBtn.disabled = true;
        })

        let finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finish repair';
        finishBtn.classList.add('finish-btn');
        finishBtn.disabled = true;
        finishBtn.addEventListener('click', () => {
            completedOrders.appendChild(ordersDiv);
            startBtn.remove();
            finishBtn.remove()
        })

        let ordersDiv = document.createElement('div');
        ordersDiv.classList.add('container');
        ordersDiv.appendChild(h2);
        ordersDiv.appendChild(h3);
        ordersDiv.appendChild(h4);
        ordersDiv.appendChild(startBtn);
        ordersDiv.appendChild(finishBtn);

        ordersSection.appendChild(ordersDiv);

        descriptionInput.value = '' 
        nameInput.value = '' 
        phoneInput.value = ''

        const clearBtn = document.querySelector('button[class="clear-btn"]');
        clearBtn.addEventListener('click', ()=>{
            let allContainers = Array.from(completedOrders.querySelectorAll('div[class="container"]'));
            for (const iterator of allContainers) {
                iterator.remove()
            }
        });
    }
}