const cars = [
    {
        id: 1,
        marca: 'Ford',
        modelo: 'Chrysler',
        color: 'naranja',
        año: 2018,
        precio: 25000,
        fotografia: 'https://images.pexels.com/photos/2631489/pexels-photo-2631489.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 2,
        marca: 'Volskwagen',
        modelo: 'Golf',
        color: 'azul',
        año: 2011,
        precio: 30000,
        fotografia: 'https://images.pexels.com/photos/5763082/pexels-photo-5763082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 3,
        marca: 'Volskwagen',
        modelo: 'Golf',
        color: 'negro',
        año: 2019,
        precio: 300000,
        fotografia: 'https://images.pexels.com/photos/5763081/pexels-photo-5763081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
];
const edit = false;
//Mostrando los carros
function showCars(dataCars) {
    let container = document.getElementById('cars-container');
    container.innerHTML = '';
    dataCars.forEach((car) => {
        const htmlCar = `<div class="col-md-4 rounded d-inline-flex mt-4 mb-4">
                            <div class="card bg-transparent" style="width: 18rem;">
                                <img src="${car.fotografia}" class="roundend img-thumbnail" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title text-center">${car.marca}</h5>
                                  <span>Modelo: ${car.modelo}</span><br>
                                  <span>Color: ${car.color}</span><br>                                 
                                  <span>Año: ${car.año}</span><br>                                  
                                  <span>Precio: $${car.precio}</span>
                                </div>
                                <div class="position-relative ml-2 mb-2">
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
    alert("Agregado correctamente");
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
    //console.log(index);
    document.getElementById('valor').value = car.id;
    document.getElementById('marca').value = car.marca;
    document.getElementById('modelo').value = car.modelo;
    document.getElementById('color').value = car.color;
    document.getElementById('anio').value = car.año;
    document.getElementById('precio').value = car.precio;
    document.getElementById('fotografia').value = car.fotografia;
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
    const buttonValue = getFormCarButton().value;
    if(buttonValue === EDIT){
        const value = document.getElementById('valor').value;
        const index = cars.findIndex((car) => car.id === Number(value));
        cars[index].marca = document.getElementById('marca').value;
        cars[index].modelo = document.getElementById('modelo').value;
        cars[index].color = document.getElementById('color').value;
        cars[index].año = document.getElementById('anio').value;
        cars[index].precio = document.getElementById('precio').value;
        cars[index].fotografia = document.getElementById('fotografia').value;    
        showCars(cars);
        resetFormContainer();
        hideFormContainer();
        alert('Editado correctamente');
    } else {
        addCar();
    }
}
showCars(cars);