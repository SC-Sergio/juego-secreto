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
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`¡Felicidades! Has adivinado el numero secreto en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        // Si el numero no es igual al secreto, se le da una pista al usuario
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero secreto es menor");
        } else {
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }    
    return;
}

function limpiarCaja() {
    document.getElementById("valorUsuario").value = "";
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;

    console.log(numeroGenerado)
    console.log(ListaNumerosSorteados)
    // Si el numero generado ya fue sorteado, se vuelve a generar
    if (ListaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","ya se sortearon todos los numeros, reinicia el juego");
    } else 
    // Si el numero generado ya fue sorteado, se vuelve a generar
    if (ListaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        ListaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function reiniciarJuego() {
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    return;
}

asignarTextoElemento("h1","Juego de adivinar un numero");
asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);