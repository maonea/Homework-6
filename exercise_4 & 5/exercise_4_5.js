// Exercise 4 
//Avand o lista de automobile pentru care se specifica marca si modelul, sa se afiseze cate dintre automobile sunt de origine germana.



const carList = [
    {
        carName: 'BMW',
        model: 'X3',
        origin: 'German',
        productionYear: 2001
    },
    {
        carName: 'Audi',
        model: 'A5',
        origin: 'German',
        productionYear: 2005
    },
    {
        carName: 'Peugeot',
        model: '206',
        origin: 'French',
        productionYear: 1998
    },
    {
        carName: 'Renault',
        model: 'Clio',
        origin: 'French',
        productionYear: 2000
    },
    {
        carName: 'Lamborghini',
        model: 'Aventador',
        origin: 'Italian',
        productionYear: 2010
    },
    {
        carName: 'Opel',
        model: 'Astra',
        origin: 'German',
        productionYear: 2018
    },
    {
        carName: 'Toyota',
        model: 'Auris',
        origin: 'Japanese',
        productionYear: 2015
    },
];

const germanCars = [];

for (let i = 0; i < carList.length; i++) {

    if (carList[i].origin == 'German') {
        germanCars.push(carList[i]);
    }
}
const showGerman = document.createElement('div');
const selectMainDiv = document.getElementById('the-german-cars');
selectMainDiv.appendChild(showGerman);
showGerman.textContent = `There are ${germanCars.length} german cars in the list`;


// Exercise 5
//Daca se speficica si anul aparitiei modelului pentru fiecare dintre automobilele de mai sus, 
// sa se afiseze care este cel mai nou model aparut dintre cele date.


const newestCar = [];
const showNewestCar = [];
// newestCar.push(carList[0].productionYear);
for (let i = 0; i < carList.length; i++) {
    if (carList[i].productionYear > newestCar) {
        newestCar.pop();
        newestCar.push(carList[i].productionYear);

        showNewestCar.pop();
        showNewestCar.push(carList[i]);

    } else if (carList[i].productionYear === newestCar) {
        newestCar.push(carList[i].productionYear);
        showNewestCar.push(carList[i]);
    }
}

const printNewestCar = document.createElement('div');
selectMainDiv.appendChild(printNewestCar);
printNewestCar.textContent = `The newest car is a ${showNewestCar[0].productionYear} ${showNewestCar[0].carName}, model: ${showNewestCar[0].model}, origin: ${showNewestCar[0].origin} `

console.log(newestCar);
console.log(showNewestCar);

























