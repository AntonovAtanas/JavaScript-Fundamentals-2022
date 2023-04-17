function attachEvents() {
    let phonebookList = document.getElementById('phonebook');

    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    let addBtn = document.getElementById('btnCreate');
    addBtn.addEventListener('click', add);

    let loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', load);

    const URL = 'http://localhost:3030/jsonstore/phonebook';

    async function load() {

        try {
            let res = await fetch(URL);
            let data = Object.entries(await (res.json()));

            data.forEach(entry => {
                let li = document.createElement('li');
                li.textContent = `${entry[1].person}: ${entry[1].phone}`;
                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', async function (event) {

                    await fetch(`${URL}/${entry[0]}`, { // it can be without headers
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json'
                        }
                    });

                    event.target.parentElement.remove()
                })

                li.appendChild(deleteBtn);
                phonebookList.appendChild(li);
            });

        } catch (error) {
            console.log(error)
        }
    };

    async function add() {
        let person = personInput.value;
        let phone = phoneInput.value;

        let obj = {
            'person': person,
            'phone': phone
        };

        try {
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
        } catch (error) {
            console.log(error);
        };

        phonebookList.innerHTML = '';

        load();

        personInput.value = '';
        phoneInput.value = '';
    };
}

attachEvents();