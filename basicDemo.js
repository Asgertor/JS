const SERVER_URL = "http://localhost:8080/api/cars";

/*
const car = fetch(SERVER_URL)
                .then(response => {
                    console.log(response);
                    return response.json()
                    });

console.log("2 car: ");
console.log(3 + car);


fetch(SERVER_URL)
            .then(response => {
            return response.json()
            })
            .then(data => {
                console.log(data);
            })

*/

const newCar = {
    brand: "Toyota",
    model: "Yaris",
    pricePerDay: 2005,
    bestDiscount: 25
};

const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newCar)
};

fetch(SERVER_URL, options)
    .then(response => response.json())
    .then(data => console.log(data))
