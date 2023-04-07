$(document).ready(function () {
    var botMessages = [
        "Hola, ¿cómo estás?",
        "¿En qué puedo ayudarte?",
        "Lo siento, no entendí. ¿Podrías ser más específico?",
        "Gracias por contactarnos. ¿Puedo ayudarte con algo más?",
    ];
    var currentMessage = 0;

    // Abrir el chatbot
    $("#chatbot-open").on("click", function () {
        $("#chatbot").addClass("open");
    });

    // Cerrar el chatbot
    $("#chatbot-close").on("click", function () {
        $("#chatbot").removeClass("open");
    });

    // Enviar mensaje
    $("#chatbot-form").on("submit", function (e) {
        e.preventDefault();
        var message = $("#chatbot-input").val();
        $("#chatbot-input").val("");
        if (message !== "") {
            addMessage(message, "user");
            setTimeout(function () {
                addMessage(botMessages[currentMessage], "bot");
                currentMessage = (currentMessage + 1) % botMessages.length;
            }, 1000);
        }
    });

    // Añadir mensaje al chatbot
    function addMessage(message, sender) {
        var container = $("<div>").addClass("chatbot-message " + sender);
        var text = $("<p>").text(message);
        container.append(text);
        $("#chatbot-messages").append(container);
        $("#chatbot-messages").scrollTop($("#chatbot-messages").height());
    }
});