

var intervaloAnimacion;

function escribirMensaje(mensaje, elemento, velocidad) {
    var i = 0;
    intervaloAnimacion = setInterval(function () {
        elemento.innerHTML += mensaje.charAt(i);
        i++;
        if (i > mensaje.length) {
            clearInterval(intervaloAnimacion);
        }
    }, velocidad);
}

document.getElementById("boton1").onclick = function () {
    var elemento = document.getElementById("sobremi");
    elemento.style.opacity = 0;
    clearInterval(intervaloAnimacion);
    setTimeout(function () {
        elemento.innerHTML = "";
        escribirMensaje(
            "Me considero una persona flexible, con alta capacidad de adaptabilidad y aprendizaje. Actualmente me encuentro trabajando en KOMO en la digitalizacion y desarrllando contenido audiovisual en la compania de Teatro, (Mi lugar en el Mundo)",
            elemento,
            40
        );
        elemento.style.opacity = 1;
    }, 500);
};

document.getElementById("boton2").onclick = function () {
    var elemento = document.getElementById("sobremi");
    elemento.style.opacity = 0;
    clearInterval(intervaloAnimacion);
    setTimeout(function () {
        elemento.innerHTML = "";
        escribirMensaje(
            " DESARROLLADOR WEB - DISEÑO GRAFICO – EDICION DE VIDEO- EDICION DE SONIDO  (Paquete de  Adobe Cloud)  – ANIMACION 3D (Cinema 4d)",
            elemento,
            40
        );
        elemento.style.opacity = 1;
    }, 500);
};



window.onload = function () {
    // Wait for page to load before starting the animation
    document.querySelector(".progress-bar::before").addEventListener("animationend", function () {
        // Redirect to another page after the animation is complete
       
    });
}

window.onload = function () {
    setTimeout(function () {
        document.getElementById("boton").classList.remove("delayed-appear");
    }, 3000);
};

// Obtener el div y el elemento de texto
var miDiv = document.getElementById("miDiv");
var miTexto = document.getElementById("sobremi");

// Agregar la clase con la animación al div
miDiv.classList.add("animacionZoom");

// Esperar a que la animación termine antes de normalizar el div
setTimeout(function () {
    miDiv.classList.remove("animacionZoom");
}, 1000); // Duración de la animación en milisegundos (1 segundo en este ejemplo)

function animateBorder() {
    var border = document.getElementById("border");
    var light = document.createElement("div");
    light.className = "light";
    border.parentNode.appendChild(light);
    setTimeout(function () {
        light.parentNode.removeChild(light);
    }, 1000);
}
