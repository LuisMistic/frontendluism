const services = {
    '1': {
        title: 'Desarrollo web',
        description: 'El desarrollo web es la creación de sitios y aplicaciones web utilizando diferentes tecnologías como HTML, CSS, JavaScript, entre otras.',
        submenu: {
            'a': 'Diseño web',
            'b': 'Desarrollo backend',
            'c': 'Desarrollo frontend'
        }
    },
    '2': {
        title: 'Diseño gráfico',
        description: 'El diseño gráfico es el arte y la práctica de planificar y proyectar ideas y experiencias visuales y textuales. Se utiliza en publicaciones impresas o digitales, como libros, revistas y periódicos.',
        submenu: {
            'a': 'Identidad corporativa',
            'b': 'Diseño editorial',
            'c': 'Diseño publicitario'
        }
    },
    '3': {
        title: 'Edición de video',
        description: 'La edición de video es el proceso de manipular y reorganizar material de video para crear una historia o mensaje nuevo. Es utilizado en producciones de televisión, cine y video.',
        submenu: {
            'a': 'Edición de video corporativo',
            'b': 'Edición de video de eventos',
            'c': 'Edición de video creativo'
        }
    }
};

let chatState = 'menu'; // Estado inicial
let chatSubmenuSelection = '';

const chatList = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.chatbot-send').addEventListener('click', () => {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            handleMessage(userMessage);
            chatInput.value = '';
        }
    });

    document.querySelector('.chatbot-header').addEventListener('click', () => {
        toggleChatbot();
    });
});

function handleMessage(message) {
    switch (chatState) {
        case 'menu':
            handleMenuSelection(message);
            break;
        case 'submenu':
            handleSubmenuSelection(message);
            break;
        case 'submenu-option':
            handleSubmenuOptionSelection(message);
            break;
    }
}

function handleMenuSelection(message) {
    if (services[message]) {
        const service = services[message];
        addMessage(service.description, 'bot');
        addMessage('¿Qué te gustaría saber sobre ' + service.title + '?', 'bot');
        addSubmenu(service.submenu);
        chatSubmenuSelection = message;
        chatState = 'submenu';
    } else {
        addMessage('Lo siento, no entiendo tu pregunta. Por favor, intenta con otra consulta.', 'bot');
    }
}

function handleSubmenuSelection(message) {
    const service = services[chatSubmenuSelection];
    const submenuOption = service.submenu[message];
    if (submenuOption) {
        addMessage(submenuOption, 'bot');
        chatState = 'submenu-option';
    } else if (message.toLowerCase() === 'volver') {
        addMessage('Has vuelto al menú principal', 'bot');
        clearSubmenu();
        chatState = 'menu';
    } else {
        addMessage('Lo siento, no entiendo tu pregunta. Por favor, intenta con otra consulta.', 'bot');
    }
}
function handleSubmenuOptionSelection(message) {
    if (message.toLowerCase() === 'volver') {
        const service = services[chatSubmenuSelection];
        addMessage('Has vuelto al submenú de ' + service.title, 'bot');
        addSubmenu(service.submenu);
        chatState = 'submenu';
    } else {
        addMessage('Lo siento, no entiendo tu pregunta. Por favor, intenta con otra consulta.', 'bot');
    }
}

function addSubmenu(submenu) {
    const submenuMessage = 'Por favor, elige una opción:';
    for (const [key, value] of Object.entries(submenu)) {
        submenuMessage += `\n${key}. ${value}`;
    }
    addMessage(submenuMessage, 'bot');
}

function clearSubmenu() {
    chatSubmenuSelection = null;
    const submenuItems = document.querySelectorAll('.chat-submenu-item');
    for (const item of submenuItems) {
        item.remove();
    }
}

function handleSubmenuSelection(message) {
    const service = services[chatSubmenuSelection];
    const submenuOption = service.submenu[message];
    if (submenuOption) {
        addMessage(submenuOption, 'bot');
        chatState = 'submenu-option';
    } else if (message.toLowerCase() === 'volver') {
        addMessage('Has vuelto al menú principal', 'bot');
        clearSubmenu();
        chatState = 'menu';
    } else {
        addMessage('Lo siento, no entiendo tu pregunta. Por favor, intenta con otra consulta.', 'bot');
    }
}