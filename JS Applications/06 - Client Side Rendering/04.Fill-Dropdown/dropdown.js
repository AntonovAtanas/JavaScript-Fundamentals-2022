import { html, render } from '../node_modules/lit-html/lit-html.js'
const menu = document.getElementById('menu');
document.querySelector('form').addEventListener('submit', addCity);
let newCity = document.getElementById('itemText');

async function getCities() {
    let response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    let data = await response.json();
    return data;
}

let options = (getCities) => html
    `
    ${getCities.map(city => html`<option value=${city[1]._id}>${city[1].text}</option>`)}
`

render(options(Object.entries(await getCities())), menu)

async function addCity(e) {
    e.preventDefault();

    fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: newCity.value })
    })
        .then(res => {
            if (res.status !== 200) {
                throw new Error();
            }
            return res.json()
        })

    render(options(Object.entries(await getCities())), menu)
    newCity.value = '';
}