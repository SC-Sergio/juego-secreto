let numeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    if (isNaN(numeroDeUsuario) || numeroDeUsuario < 1 || numeroDeUsuario > numeroMaximo) {
        asignarTextoElemento("p", `Por favor, ingresa un número válido entre 1 y ${numeroMaximo}`);
        limpiarCaja();
        return;
    }

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`¡Felicidades! Has adivinado el numero secreto en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        intentos++;
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero secreto es menor");
        } else {
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        limpiarCaja();
    }    
    return;
}

function limpiarCaja() {
    document.getElementById("valorUsuario").value = "";
    return;
}

function generarNumeroSecreto() {
    if (ListaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","ya se sortearon todos los numeros, reinicia el juego");
        return null;
    }

    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while (ListaNumerosSorteados.includes(numeroGenerado));

    ListaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}

function reiniciarJuego() {
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    return;
}

asignarTextoElemento("h1","Juego de adivinar un numero");
asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
