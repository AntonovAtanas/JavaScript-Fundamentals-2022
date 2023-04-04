function getInfo() {
    const stopIdInput = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');

    let stopID = stopIdInput.value;

    busesList.replaceChildren();

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

    fetch(url)
        .then(res => {
            if (res.status !== 200) {
                throw new Error();
            }
            return res.json()
        })
        .then(data => {
            stopName.textContent = data.name;

            for (const key in data.buses) {
                let li = document.createElement('li');
                li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
                busesList.appendChild(li);
            }
        })
        .catch(err => stopName.textContent = err)

}