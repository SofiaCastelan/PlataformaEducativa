document.addEventListener("DOMContentLoaded", function() {
    // Inicializar ScrollReveal
    const sr = ScrollReveal({
        delay: 300,
        duration: 1000,
        easing: 'ease-in-out'
    });

    sr.reveal('.header-content', {
        origin: 'top',
        distance: '50px'
    });

    sr.reveal('.Informacion', {
        origin: 'bottom',
        distance: '50px'
    });

    sr.reveal('.about', {
        origin: 'left',
        distance: '50px'
    });

    sr.reveal('.services', {
        origin: 'right',
        distance: '50px'
    });

    sr.reveal('.price', {
        origin: 'bottom',
        distance: '50px'
    });

    sr.reveal('.footer', {
        origin: 'bottom',
        distance: '50px'
    });

    // Reiniciar animaciones al volver al inicio del scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY === 0) {
            sr.reveal('.header-content');
            sr.reveal('.Informacion');
            sr.reveal('.about');
            sr.reveal('.services');
            sr.reveal('.price');
            sr.reveal('.footer');
        }
    });
});
