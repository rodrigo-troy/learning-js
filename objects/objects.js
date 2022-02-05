const empty_object = {};

const stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

const flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

console.log(flight.airline);
console.log(flight.departure.city);
console.log(flight.arrival.time);

flight.nuevaVariable = 12345;

console.log(flight.nuevaVariable);
