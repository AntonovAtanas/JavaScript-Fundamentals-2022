window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const checkinInput = document.getElementById('date-in');
    const checkoutInput = document.getElementById('date-out');
    const guestsNumberInput = document.getElementById('people-count');

    const reservationInfo = document.querySelector('.info-list');
    const confirmInfo = document.querySelector('.confirm-list');

    let h1 = document.getElementById('verification');

    let nextBtn = document.getElementById('next-btn')
    nextBtn.addEventListener('click', next);

    function next(event) {
        event.preventDefault();

        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let checkin = checkinInput.value;
        let checkout = checkoutInput.value;
        let guestsNumber = guestsNumberInput.value;

        if (firstName === '' || lastName === '' || checkin === '' || checkout === '' || guestsNumber === '' || checkout <= checkin) {
            return;
        }

        let li = elementFactory('li', '', reservationInfo, { class: 'reservation-content' });
        let article = elementFactory('article', '', li);
        let h3 = elementFactory('h3', `Name: ${firstName} ${lastName}`, article);
        let pStartDate = elementFactory('p', `From date: ${checkin}`, article);
        let pEndDate = elementFactory('p', `To date: ${checkout}`, article);
        let pGuests = elementFactory('p', `For ${guestsNumber} people`, article);

        let editBtn = elementFactory('button', 'Edit', li, { class: 'edit-btn' });
        editBtn.addEventListener('click', edit)

        let continueBtn = elementFactory('button', 'Continue', li, { class: 'continue-btn' });
        continueBtn.addEventListener('click', continueButton)

        // clearing the inputs 
        firstNameInput.value = '';
        lastNameInput.value = '';
        checkinInput.value = '';
        checkoutInput.value = '';
        guestsNumberInput.value = '';

        nextBtn.disabled = true;

        function continueButton() {
            editBtn.remove();
            continueBtn.remove();
            let confirmBtn = elementFactory('button', 'Confirm', li, { class: 'confirm-btn' });
            confirmBtn.addEventListener('click', confirmReservation);

            let cancelBtn = elementFactory('button', 'Cancel', li, { class: 'cancel-btn' });
            cancelBtn.addEventListener('click', cancel);
            confirmInfo.appendChild(li)
        }

        function cancel(){
            nextBtn.disabled = false;
            h1.classList.add('reservation-cancelled');
            h1.textContent = 'Cancelled.'
            li.remove()
        }

        function confirmReservation() {
            nextBtn.disabled = false;
            h1.classList.add('reservation-confirmed');
            h1.textContent = 'Confirmed.'
            li.remove();
        }

        function edit() {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            checkinInput.value = checkin;
            checkoutInput.value = checkout;
            guestsNumberInput.value = guestsNumber;

            nextBtn.disabled = false;
            li.remove();
        }

        function elementFactory(type, text, parent, attributes) {
            let el = document.createElement(type);
            el.textContent = text;

            if (parent) {
                parent.appendChild(el);
            };

            if (attributes) {
                for (const key in attributes) {
                    el.setAttribute(key, attributes[key]);
                }
            }

            return el;
        }
    }
}





