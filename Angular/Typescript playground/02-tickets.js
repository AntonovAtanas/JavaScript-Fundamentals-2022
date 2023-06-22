var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function tickets(arr, criteria) {
    var result = [];
    var sortedArr = arr.sort(function (a, b) {
        if (criteria === "destination") {
            return a.split("|")[0].localeCompare(b.split("|")[0]);
        }
        else {
            return a.split("|")[2].localeCompare(b.split("|")[2]);
        }
    });
    sortedArr.forEach(function (city) {
        var cityInfo = city.split("|");
        var destination = cityInfo[0];
        var price = Number(cityInfo[1]);
        var status = cityInfo[2];
        var town = new Ticket(destination, price, status);
        result.push(town);
    });
    console.log(result);
}
tickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "status");
