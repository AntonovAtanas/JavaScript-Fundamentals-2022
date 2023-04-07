function solve() {

    const info = document.querySelector('.info');

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let nextStop = 'depot';
    
    async function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`
        let res = await fetch(url);

        try {
            let data = await res.json();
            info.textContent = `Next stop ${data.name}`;
            nextStop = data.next;
        } catch {
            info.textContent = 'Error';
            throw new Error('Error');
        }

        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        let arriving = info.textContent.split('Next stop ')[1]

        info.textContent = `Arriving at ${arriving}`;

        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();