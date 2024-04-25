// Obtenemos todas las preguntas
var preguntas = document.querySelectorAll('.question');

// Iteramos sobre cada pregunta para agregar el evento de clic
preguntas.forEach(function(pregunta) {
    var titulo = pregunta.querySelector('h2');
    var respuesta = pregunta.querySelector('p');

    // Agregamos un evento de clic al título de la pregunta
    titulo.addEventListener('click', function() {
        // Alternamos la clase 'show' en la respuesta para mostrar u ocultar
        respuesta.classList.toggle('show');
    });
});

function submitCustomQuestion() {
    var question = document.getElementById("custom-question").value;
    console.log("Pregunta personalizada:", question);
}
