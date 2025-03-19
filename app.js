let listaDeAmigos = [];
let amigoSecreto = "";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Ingresa un nombre válido.");
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    asignarTextoElemento("#resultado", "");

    listaDeAmigos.push(nombre);
    actualizarLista();
    limpiarCampo();
    return;
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaDeAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });

    lista.style.display = "block"; 
    return;
}

function limpiarCampo() {
    document.querySelector("#amigo").value = "";
    return;
}

function generarAmigoSecreto() {
    if (listaDeAmigos.length < 2) {
        asignarTextoElemento("#resultado", "Debe haber al menos 2 participantes.");
        return "";
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    return listaDeAmigos[indiceAleatorio];
}

function sortearAmigo() {
    amigoSecreto = generarAmigoSecreto();

    if (amigoSecreto !== "") {
        asignarTextoElemento("#resultado", `El amigo secreto es ${amigoSecreto}`);
        listaDeAmigos = [];
        document.getElementById("listaAmigos").innerHTML = ""; 
    }
    return;
}
