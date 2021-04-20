const cars = [
    {
        id: 1,
        marca: 'Ford',
        modelo: 'Chrysler',
        color: 'azul',
        año: 2010,
        precio: 25000,
        fotografia: 'https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 2,
        marca: 'Nissan',
        modelo: 'Tsuru',
        color: 'azul',
        año: 2010,
        precio: 25000,
        fotografia: 'https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
];
const edit = false;
//Mostrando los carros
function showCars(dataCars) {
    const container = document.getElementById('cars-container');
    container.innerHTML = '';
    dataCars.forEach((car) => {
        const htmlCar = `<div class="col-md-5 d-inline-flex">
                            <div class="card" style="width: 18rem;">
                                <img src="${car.fotografia}" class="card-img-top img-thumbnail" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title text-center">${car.marca}</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item text-center">Modelo: ${car.modelo}</li>
                                  <li class="list-group-item text-center">Color: ${car.color}</li>                                 
                                  <li class="list-group-item text-center">Año: ${car.año}</li>                                  
                                  <li class="list-group-item text-center">Precio: $${car.precio}</li>
                                </ul>
                                <div class="card-body d-flex py-md-5">
                                    <button class="btn btn-warning" onclick="editCar(${car.id})">Editar Carro</button>
                                    <button class="btn btn-danger" onclick="deleteCar(${car.id})">Borrar Carro</button>
                                </div>
                            </div>
                        </div>`;
        container.innerHTML += htmlCar;
    });
}
const EDIT = 'edit';
const CREATE = 'create';
//Agregando carros nuevos
function addCar() {
    // Podemos acceder al value en una sola línea
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const anio = document.getElementById('anio').value;
    const precio = document.getElementById('precio').value;
    const url = document.getElementById('fotografia').value;
    const newCar = {
        id: generateID(),
        marca: marca,
        modelo: modelo,
        color: color,
        año: anio,
        precio: precio,
        fotografia: url,
    }
    cars.push(newCar);
    showCars(cars);
    resetFormContainer();
    hideFormContainer();
}
//Para borrar el carro por ID
function deleteCar(id) {
    //Obtenemos el index o la posicion del usuario
    const index = cars.findIndex((car) => car.id === id);
    cars.splice(index, 1);
    showCars(cars); 
}
//Actualizar el carro por ID
function editCar(id) {
    //Obtenemos el ID del carro
    const index = cars.findIndex((car) => car.id === id);
    const car = cars[index];
    document.getElementById('marca').value = car.marca;
    document.getElementById('modelo').value = car.modelo;
    document.getElementById('color').value = car.color;
    document.getElementById('anio').value = car.año;
    document.getElementById('precio').value = car.precio;
    document.getElementById('fotografia').value = car.fotografia;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const anio = document.getElementById('anio').value;
    const precio = document.getElementById('precio').value;
    const url = document.getElementById('fotografia').value;
    if(cars.id === id){
        cars.marca = marca;
        cars.modelo = modelo;
        cars.color = color;
        cars.anio = anio;
        cars.precio = precio;
        cars.fotografia = url;
    
    }
    showFormContainer();
    changeEditbutton();
}
//Generando el ID del carro
function generateID() {
    let biggerID = 0;
    cars.forEach((car) => {
        if(car.id > biggerID){
            biggerID = car.id;
        }
    });
    return biggerID += 1;
}
//Mostrando el formulario
function showFormContainer() {
    document.getElementById('create-car-container').classList.remove('d-none');
    changeCreatebutton();
}
//Reset the form
function resetFormContainer() {
    document.getElementById('car-form').reset();
}
//Ocultando el formulario
function hideFormContainer() {
    document.getElementById('create-car-container').classList.add('d-none');
}
//Change the button create of car
function changeCreatebutton() {
    const button = getFormCarButton();
    button.innerHTML = 'Guardar';
    button.classList.add('btn-primary');
    button.classList.remove('btn-warning');
    button.value = CREATE;
}
//Change the button edit of car
function changeEditbutton() {
    const button = getFormCarButton();
    button.innerHTML = 'Editar';
    button.classList.add('btn-primary');
    button.classList.remove('btn-warning');
    button.value = EDIT;
}
//Obtener el id del boton
function getFormCarButton() {
    return document.getElementById('btn-car-form');
}
//Get value button 
function car() {
    const buttonValue = getFormCarButton().value
    if(buttonValue === EDIT){
        alert('Editamos')
    } else {
        addCar();
    }
}
showCars(cars);