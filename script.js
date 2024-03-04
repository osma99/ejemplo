// Función para enviar mensaje y obtener respuesta
function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim();
    
    if (message === '') {
        alert('Por favor, escribe un mensaje');
        return;
    }
    
    var messageList = document.getElementById('message-list');
    
    // Crear un nuevo elemento de mensaje para el usuario
    var userMessage = document.createElement('div');
    userMessage.textContent = "Usuario: " + message;
    userMessage.className = 'message sender';
    messageList.appendChild(userMessage);
    
    // Agregar comentario basado en el mensaje del usuario
    var responseMessage = document.createElement('div');
    responseMessage.className = 'message receiver';
    if (message.toLowerCase().includes('hola')) {
        responseMessage.textContent = "¡Hola! ¿Cómo estás?";
    } else if (message.toLowerCase().includes('bien y tu')) {
        responseMessage.textContent = "Soy una IA siempre estoy bien :) Me alegro de que estés bien.";
    } else if (message.toLowerCase().includes('jajaja')) {
        responseMessage.textContent = "y comentame, cual es tu lugar favorito?";
    } else if (message.toLowerCase().includes('amo las playas')) {
        responseMessage.textContent = "Es un lugar hermoso lugar";
    } else if (message.toLowerCase().includes('Adios')) {
        responseMessage.textContent = "Adios!!gracias por conversar";
    } else {
        responseMessage.textContent = "Computadora: No entendí tu mensaje.";
    }
    messageList.appendChild(responseMessage);
    
    // Guardar el mensaje en el almacenamiento local del navegador
    var messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ content: message, sender: 'user' });
    messages.push({ content: responseMessage.textContent, sender: 'computer' });
    localStorage.setItem('messages', JSON.stringify(messages));
    
    // Limpiar el campo de entrada de mensajes
    messageInput.value = '';
}