function solve() {
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const birthdateInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');

    const hireBtn = document.getElementById('add-worker');
    hireBtn.addEventListener('click', hire);

    const tbody = document.getElementById('tbody');

    let sum = document.getElementById('sum');

    function hire(ev) {
        ev.preventDefault();
        if (firstNameInput.value === '' || lastNameInput.value === '' || emailInput.value === '' || birthdateInput.value === '' || positionInput.value === '' || salaryInput.value === '') {
            return;
        }
        let trMain = document.createElement('tr');

        //creating elements and adding their values
        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = firstNameInput.value;

        let tdLastName = document.createElement('td');
        tdLastName.textContent = lastNameInput.value;

        let tdEmail = document.createElement('td');
        tdEmail.textContent = emailInput.value;

        let tdDate = document.createElement('td');
        tdDate.textContent = birthdateInput.value;

        let tdPosition = document.createElement('td');
        tdPosition.textContent = positionInput.value;

        let tdSalary = document.createElement('td');
        tdSalary.textContent = salaryInput.value;

        let tdButtons = document.createElement('td');

        let buttonFired = document.createElement('button');
        buttonFired.classList.add('fired');
        buttonFired.textContent = 'Fired';
        buttonFired.addEventListener('click', (ev) => {
            let salary = ev.target.parentElement.parentElement.children[5].textContent
            let total = Number(sum.textContent);
            total -= Number(salary);
            sum.textContent = total.toFixed(2);

            ev.target.parentElement.parentElement.remove();
        })

        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit');
        buttonEdit.textContent = 'Edit';
        buttonEdit.addEventListener('click', (ev) => {
            firstNameInput.value = ev.target.parentElement.parentElement.children[0].textContent;
            lastNameInput.value = ev.target.parentElement.parentElement.children[1].textContent;
            emailInput.value = ev.target.parentElement.parentElement.children[2].textContent;
            birthdateInput.value = ev.target.parentElement.parentElement.children[3].textContent;
            positionInput.value = ev.target.parentElement.parentElement.children[4].textContent;
            salaryInput.value = ev.target.parentElement.parentElement.children[5].textContent;

            let total = Number(sum.textContent);
            total -= Number(salaryInput.value);
            sum.textContent = total.toFixed(2);

            ev.target.parentElement.parentElement.remove();
        })

        tdButtons.appendChild(buttonFired);
        tdButtons.appendChild(buttonEdit);

        // appending the main tr

        trMain.appendChild(tdFirstName);
        trMain.appendChild(tdLastName);
        trMain.appendChild(tdEmail);
        trMain.appendChild(tdDate);
        trMain.appendChild(tdPosition);
        trMain.appendChild(tdSalary);
        trMain.appendChild(tdButtons);

        tbody.appendChild(trMain);

        // incrementing the total sum
        let total = 0;
        total += Number(sum.textContent) + Number(salaryInput.value);
        sum.textContent = total.toFixed(2);

        // clean the input fields

        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        birthdateInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';
    }
}
solve()