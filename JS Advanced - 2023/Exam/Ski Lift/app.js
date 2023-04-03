window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const numberPeopleInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysCountInput = document.getElementById('days-count');

    let nextStepBtn = document.getElementById('next-btn');
    nextStepBtn.addEventListener('click', nextStep);

    //sections
    let ticketPreview = document.getElementsByClassName('ticket-info-list')[0];
    let confirmTicket = document.getElementsByClassName('confirm-ticket')[0];
    let mainDiv = document.getElementById('main');
    let body = document.getElementById('body')

    function nextStep(event) {
        event.preventDefault();

        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let people = numberPeopleInput.value;
        let fromDate = fromDateInput.value;
        let daysCount = daysCountInput.value;

        if (firstName === '' || lastName === '' || people === '' || fromDate === '' || daysCount === '') {
            return;
        }
        //info
        let li = elementFactory('li', '', ticketPreview, { class: 'ticket' });
        let article = elementFactory('article', '', li);
        let h3 = elementFactory('h3', `Name: ${firstName} ${lastName}`, article);
        let pFromDate = elementFactory('p', `From date: ${fromDate}`, article);
        let pDays = elementFactory('p', `For ${daysCount} days`, article);
        let pPeople = elementFactory('p', `For ${people} people`, article);

        //buttons
        let editBtn = elementFactory('button', `Edit`, li, { class: 'edit-btn' });
        editBtn.addEventListener('click', edit);

        let continueBtn = elementFactory('button', `Continue`, li, { class: 'continue-btn' });
        continueBtn.addEventListener('click', continueFunc)


        //disabling the next button
        nextStepBtn.disabled = true;

        // clearing the input fields;
        firstNameInput.value = ''
        lastNameInput.value = ''
        numberPeopleInput.value = ''
        fromDateInput.value = ''
        daysCountInput.value = ''

        function continueFunc() {
            li.classList.remove('ticket');
            li.classList.add('ticket-content');
            editBtn.remove();
            continueBtn.remove();

            let confirmBtn = elementFactory('button', `Confirm`, li, { class: 'confirm-btn' });
            confirmBtn.addEventListener('click', confirmFn)

            let cancelBtn = elementFactory('button', `Cancel`, li, { class: 'cancel-btn' });
            cancelBtn.addEventListener('click', () => {
                li.remove();
                nextStepBtn.disabled = false;
            })

            confirmTicket.appendChild(li);
        }

        function confirmFn() {

            let thankYou = document.createElement('h1');
            thankYou.textContent = 'Thank you, have a nice day!';
            thankYou.setAttribute('id', 'thank-you');

            let backBtn = document.createElement('button');
            backBtn.textContent = 'Back';
            backBtn.setAttribute('id', 'back-btn');
            backBtn.addEventListener('click', () => {
                window.location.reload(); // edge?
            })

            mainDiv.remove();
            body.appendChild(thankYou);
            body.appendChild(backBtn);

        }

        function edit() {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            numberPeopleInput.value = people;
            fromDateInput.value = fromDate;
            daysCountInput.value = daysCount;
            nextStepBtn.disabled = false;
            li.remove()
        }

        function elementFactory(elementType, content, parentElement, attribute) {
            let el = document.createElement(elementType);
            el.textContent = content;

            if (attribute) {
                for (const key in attribute) {
                    el.setAttribute(key, attribute[key])
                }
            };

            if (parentElement) {
                parentElement.appendChild(el);
            }
            return el
        }

    }
}




