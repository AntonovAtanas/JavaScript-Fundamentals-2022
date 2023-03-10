function tickets(arr, criteria) {

    let result = [];

    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (const currentCinema of arr) {
        let [destination, price, status] = currentCinema.split('|');
        result.push(new Tickets(destination, Number(price), status))
    }

    if (criteria === 'destination') {
        return result.sort((a, b) => a.destination.localeCompare(b.destination))
    } else if (criteria === 'price') {
        return result.sort((a, b) => a.price - b.price)
    } else {
        return result.sort((a, b) => a.status.localeCompare(b.status))
    }
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))