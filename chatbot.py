from flask import Flask, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

chatbot = ChatBot('ejemplo')
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train('chatterbot.corpus.spanish')

@app.route('/api/chat', methods=['POST'])
def chat():
    mensaje = request.json['mensaje']
    respuesta = chatbot.get_response(mensaje)
    return {'respuesta': str(respuesta)}

import openai
openai.api_key = "TU_API_KEY_DE_GPT3"

def responder_mensaje(mensaje):
    respuesta = ""
    if "hola" in mensaje.lower():
        respuesta = "¡Hola! ¿En qué puedo ayudarte hoy?"
    elif "producto" in mensaje.lower():
        respuesta = "Claro, puedo ayudarte con eso. ¿Qué tipo de producto estás buscando?"
    elif "zapatos deportivos" in mensaje.lower():
        respuesta = "Genial, contamos con una variedad de opciones de zapatos deportivos en nuestra tienda. ¿Tienes alguna marca específica en mente o algún requisito especial en cuanto al tamaño o color?"
    # Aquí puedes agregar más preguntas y respuestas según tus necesidades.
    else:
        respuesta = "Lo siento, no entendí tu consulta. ¿Podrías ser más específico?"
    return respuesta

# Ejemplo de uso
mensaje_usuario = input("Usuario: ")
respuesta_chatbot = responder_mensaje(mensaje_usuario)
print("Chatbot:", respuesta_chatbot)