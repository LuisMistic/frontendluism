const typewriter = document.querySelector('#typewriter-text');
const text = typewriter.innerHTML;
typewriter.innerHTML = '';

let i = 0;
const intervalId = setInterval(() => {
    if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
    } else {
        clearInterval(intervalId);
    }
}, 100); // Ajusta la velocidad de la animación modificando este valor

typewriter.classList.add('typewriter-animation'); // Agrega estilos CSS adicionales para la animación
