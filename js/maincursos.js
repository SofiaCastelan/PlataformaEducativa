document.addEventListener("DOMContentLoaded", function() {
    // Utilizamos la biblioteca ScrollReveal para animar la aparición de cada sección al hacer scroll
    const sections = document.querySelectorAll('.container');

    sections.forEach(function(section) {
        ScrollReveal().reveal(section, { 
            delay: 200,
            duration: 1000, // Duración de la animación en milisegundos
            easing: 'ease-out', // Función de easing para suavizar la animación
        });
    });

    // Seleccionamos todas las imágenes
    const imagenes = document.querySelectorAll('.curso img');

    // Agregamos eventos de mouseenter y mouseleave a cada imagen
    imagenes.forEach(function(imagen) {
        imagen.addEventListener('mouseenter', function() {
            // Aplicamos estilos CSS para hacer zoom a la imagen cuando el puntero entra en ella
            imagen.style.transform = 'scale(1.05)';
            imagen.style.transition = 'transform 0.3s ease-out'; // Transición más suave
        });

        imagen.addEventListener('mouseleave', function() {
            // Devolvemos la imagen a su tamaño original cuando el puntero sale de ella
            imagen.style.transform = 'scale(1)';
        });
    });
});
