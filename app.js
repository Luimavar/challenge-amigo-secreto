//array para almacenar nombres de amigos ingresados
let nombreAmigo = [];

//funcion para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

if (nombre === ""){
    alert("Ingresa un nombre por favor");
    return;
}

nombreAmigo.push(nombre);
input.value = "";
}

