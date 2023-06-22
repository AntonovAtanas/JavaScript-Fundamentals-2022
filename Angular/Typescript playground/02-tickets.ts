interface City {
  destination: string;
  price: number;
  status: string;
}

class Ticket {
  constructor(
    public destination: string,
    public price: number,
    public status: string
  ) {}
}

function tickets(arr: string[], criteria: string) {
  const result: City[] = [];

  const sortedArr = arr.sort((a: string, b: string): any => {
    if (criteria === "destination") {
      return a.split("|")[0].localeCompare(b.split("|")[0]);
    } else {
      return a.split("|")[2].localeCompare(b.split("|")[2]);
    }
  });

  sortedArr.forEach((city) => {
    const cityInfo = city.split("|");

    const destination: string = cityInfo[0];
    const price: number = Number(cityInfo[1]);
    const status: string = cityInfo[2];

    const town = new Ticket(destination, price, status);

    result.push(town);
  });
}

tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
