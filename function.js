
document.getElementById('boton1').onclick = function() {

    
    document.getElementById("sobremi").innerHTML = " Me considero una persona flexible, con alta capacidad de  adaptabilidad y aprendizaje. Actualmente me encuentro trabajando en KOMO en la digitalizacion y el ingreso de datos como tambien desarrllando contenido audiovisual en la compania de Teatro, MLM (Mi lugar en el Mundo) ";
}

document.getElementById('boton2').onclick = function () {


    document.getElementById("sobremi").innerHTML = " DISEÑO GRAFICO – EDICION DE VIDEO- EDICION DE SONIDO  (Paquete de  Adobe Cloud)  – ANIMACION 3D (Cinema 4d)  DESARROLLADOR WEB (Visual Studio Code – Apache NetBean)   ";
}


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

