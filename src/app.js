// Se establecen elementos contenedores como constantes globales
const dashboardNameDate = document.getElementById("header");
const nCompras = document.getElementById("ncompras");
const iCompras = document.getElementById("icompras");
const nUsuarios = document.getElementById("nusuarios");
const nVisitas = document.getElementById("nvisitas");

// Ejecución eventos

function eventListeners() {
    document.getElementById("btn").addEventListener("click", agregarNDashboard);
}
eventListeners();

// Crear información Dashboard
function agregarNDashboard(dashData) {
const name = document.createElement("h3");
const date = document.createElement("p");
const data = document.createTextNode(dashData);

name.appendChild(date);
console.log(data);
dashboardNameDate.appendChild(data)
}

function agregarNDashboard() {
    const data = document.getElementById("nDashboard").value;
    console.log(data);
}