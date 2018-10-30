// Se establecen elementos contenedores como constantes globales
const nCompras = document.getElementById("ncompras");
const iCompras = document.getElementById("icompras");
const nUsuarios = document.getElementById("nusuarios");
const nVisitas = document.getElementById("nvisitas");

const button = document.getElementById("btn");

// Ejecución eventos

/* function eventListeners() {
    document.getElementById("btn").addEventListener("click", generarDashboard);
   // document.getElementById("btn").addEventListener("click", agregarGrafica);
   // document.addEventListener("DOMContentLoaded", imprimirGraficas);
}
eventListeners(); */

// Crear información Dashboard
// function generarDashboard() {

button.addEventListener("click", () => {
if((document.getElementById("nDashboard").value === "" || document.getElementById("fecha").value === "")) {
    alert("No puedes dejar campos vacíos")
}else {
    let name = document.getElementById("nDashboard").value;
    document.getElementById("nDashboard").value = "";
    
    let date = document.getElementById("fecha").value;
    document.getElementById("fecha").value = "";
    
    const dashboardHeader = document.getElementById("cont");
    const divContenedor = document.createElement("div");
    
    const nameDash = document.createElement("h3");
    let dataNewName = document.createTextNode(name);
    nameDash.appendChild(dataNewName);
    
    const dateDash = document.createElement("p");
    let dataNewDate = document.createTextNode(date);
    dateDash.appendChild(dataNewDate);

    divContenedor.appendChild(nameDash);
    divContenedor.appendChild(dateDash);
    
    dashboardHeader.appendChild(divContenedor);

}
})

// }
/*
function agregarNDashboard() {
    if((document.getElementById("nDashboard").value === "" || document.getElementById("fecha").value === "")) {
        alert("No puedes dejar campos vacíos")
    }else {
    const name = document.getElementById("nDashboard").value;
    const date = document.getElementById("fecha").value;

    info = name + "-" + date;
    console.log(info);
    }
}

function agregarGrafica() {
    if((document.getElementById("cnCompras").value === "" || document.getElementById("inCompras").value === "" ||
    document.getElementById("cnUsuarios").value === "" || document.getElementById("cnVisitas").value === "")) {
        alert("No puedes dejar campos vacíos")
    }else {
        const cnCompras = document.getElementById("cnCompras").value;
        const inCOmpras = document.getElementById("inCompras").value;
        const cnUsuarios = document.getElementById("cnUsuarios").value;
        const cnVisitas = document.getElementById("cnVisitas").value;

        info = cnCompras +" "+ inCOmpras +" "+ cnUsuarios +" "+ cnVisitas;
        console.log(info);
    }
}
*/