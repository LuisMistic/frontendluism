const chatContainer = document.getElementById("chatbot-container");
const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
let saludoHecho = false;

function enviarMensaje(mensaje, clase) {
    const li = document.createElement("li");
    li.innerHTML = mensaje;
    li.classList.add("chat-message", clase);
    chatLog.appendChild(li);
    chatLog.scrollTop = chatLog.scrollHeight;
}

document.getElementById("chat-btn").addEventListener("click", function () {
    if (!saludoHecho) {
        enviarMensaje("¡Hola! Soy el Chatbot. ¿En qué puedo ayudarte?", "chat-bot");
        saludoHecho = true;
        chatContainer.classList.remove("closed");
    } else {
        chatContainer.classList.toggle("closed");
    }
});

sendBtn.addEventListener("click", function () {
    const userMsg = userInput.value;
    enviarMensaje(userMsg, "chat-user");

    // Lógica de respuestas del chatbot
    let respuestaBot;

    if (!saludoHecho) {
        respuestaBot = "Lo siento, no te he entendido. ¿En qué puedo ayudarte?";
        saludoHecho = true;
    } else if (userMsg.toLowerCase() === "1") {
        respuestaBot = "El desarrollo web implica crear sitios web y aplicaciones web dinámicas que brindan experiencias interactivas a los usuarios. ¿Te interesa algún lenguaje de programación en particular?";
    } else if (userMsg.toLowerCase() === "2") {
        respuestaBot = "El diseño gráfico se trata de la creación visual y estética de piezas publicitarias, folletos, logotipos, entre otros elementos. ¿Tienes algún proyecto en mente?";
    } else if (userMsg.toLowerCase() === "3") {
        respuestaBot = "La edición de video es el proceso técnico y artístico de manipulación y combinación de secuencias de video para producir una película o video completo. ¿Necesitas ayuda con alguna etapa en particular?";
    } else {
        respuestaBot = "Lo siento, no entiendo lo que quieres decir. Por favor ingresa una de las opciones del menú.";
    }

    enviarMensaje(respuestaBot, "chat-bot");

    // Limpiar el campo de entrada del usuario
    userInput.value = "";
});

// Ocultar el chatbot por defecto
chatContainer.classList.add("closed");
