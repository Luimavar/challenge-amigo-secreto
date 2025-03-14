//array para almacenar nombres de amigos ingresados
const nombreAmigo = [];

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});


//función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    

if (!nombre){
    alert("Ingresa un amigo por favor");
    return;
}

const nombreLower = nombre.toLowerCase();

if (nombreAmigo.some(amigo => amigo.toLowerCase() === nombreLower)) {
    alert("Este amigo ya fue agregado.");
} else {
    nombreAmigo.push(nombre);
    actualizarLista();
}

input.value = "";

}

//actualizar lista
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < nombreAmigo.length; i++){
        listaAmigos.innerHTML += `<li>${nombreAmigo[i]}</li>`;
    }
}

//sortear un amigo
function sortearAmigo() {
    if (nombreAmigo.length === 0){
        alert("No hay amigos para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombreAmigo.length);
    const amigoSorteado =nombreAmigo[indiceAleatorio];
    const resultado =document.getElementById("resultado");
    resultado.innerHTML = `<li> !Tu amigo secreto es: ${amigoSorteado}!</li>`

    document.getElementById("listaAmigos").innerHTML = "";

    nombreAmigo.length = 0;

    console.log("Nombres en la lista:", nombreAmigo);
    console.log("Índice aleatorio:", indiceAleatorio);
    console.log("Amigo sorteado:", amigoSorteado);


}
