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
            "Me considero una persona flexible, con alta capacidad de adaptabilidad y aprendizaje. Actualmente me encuentro trabajando en KOMO en la digitalizacion y el ingreso de datos como tambien desarrllando contenido audiovisual en la compania de Teatro, MLM (Mi lugar en el Mundo)",
            elemento,
            30
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
            "DISEÑO GRAFICO – EDICION DE VIDEO- EDICION DE SONIDO  (Paquete de  Adobe Cloud)  – ANIMACION 3D (Cinema 4d)  DESARROLLADOR WEB (Visual Studio Code – Apache NetBean)",
            elemento,
            30
        );
        elemento.style.opacity = 1;
    }, 500);
};


document.getElementById('boton_color0').addEventListener('click', function () {

    document.body.style.backgroundColor = '#ffffff';
    console.log("aa")

});

document.getElementById('boton_color').addEventListener('click', function () {

    document.body.style.backgroundColor = '#719C46';
    console.log("aa")

});


document.getElementById('boton_color2').addEventListener('click', function () {

    document.body.style.backgroundColor = '#FF8C00';
    console.log("aa")

});

document.getElementById('boton_color1').addEventListener('click', function () {

    document.body.style.backgroundColor = '#000000';
    console.log("aa")

});

document.getElementById('boton_color3').addEventListener('click', function () {

    document.body.style.backgroundColor = '#2F4F4F';
    console.log("aa")

});


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
