const SERVER_URL = "http://localhost:8080/api/cars";

document.getElementById("btn-get-all").addEventListener("click", getAllCars);
document.getElementById("btn-find-car").addEventListener("click", getACar);
document.getElementById("btn-add-car").addEventListener("click", addCar);

function getAllCars() {
  fetch(SERVER_URL)
    .then((res) => res.json())
    .then((cars) => {
      const tbody = document.getElementById("tbody");
      console.log(cars);

      const tableRows = cars.map(
        (car) => `
                <tr>
                    <td>${car.id}</td>
                    <td>${car.brand}</td>
                    <td>${car.model}</td>
                    <td>${car.pricePrDay}</td>
                    <td>${car.bestDiscount}</td>
                </tr>
            `
      );

      tbody.innerHTML = tableRows.join("");
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function getACar() {
  const id = document.getElementById("text-for-id").value;
  fetch(SERVER_URL + "/" + id)
    .then((res) => {
      if (!res.ok) {
        return alert("No car with that id");
      }
      return res.json();
    })
    .then((car) => {
      // document.getElementById("found-car").innerText = JSON.stringify(car,null,2)
      document.getElementById("found-car").innerText = car.model;
    });
}

function addCar() {
  const form = document.getElementById("carForm");
  const newCar = {
    brand: form.brand.value,
    model: form.model.value,
    pricePrDay: parseFloat(form.pricePrDay.value),
    bestDiscount: parseInt(form.bestDiscount.value),
  };

  console.log(newCar);
  const options ={
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newCar)
  }

  fetch(SERVER_URL, options)
    .then((res) => res.json())
    .then((car) => {
      console.log(car);
      getAllCars();
    });
    
}
