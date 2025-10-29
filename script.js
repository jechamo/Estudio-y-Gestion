document.addEventListener('DOMContentLoaded', function() {

    // --- Menú de Navegación Móvil ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        // Evento para abrir/cerrar con el botón
        menuToggle.addEventListener('click', function(event) {
            const isActive = mainMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
            menuToggle.setAttribute('aria-expanded', isActive);
            
            // Detiene la propagación para que el evento 'document' no lo cierre inmediatamente
            event.stopPropagation(); 
        });

        // Evento para cerrar el menú al hacer clic en un enlace
        const menuLinks = mainMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainMenu.classList.contains('active')) {
                    mainMenu.classList.remove('active');
                    menuToggle.classList.remove('is-active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
    
    // --- Evento para cerrar el menú al hacer clic fuera ---
    document.addEventListener('click', function(event) {
        if (mainMenu && mainMenu.classList.contains('active')) {
            // Comprueba si el clic fue FUERA del menú y FUERA del botón
            const isClickInsideMenu = mainMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle) {
                mainMenu.classList.remove('active');
                menuToggle.classList.remove('is-active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });


    // --- Año actual en el footer ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // --- Efecto de cabecera al hacer scroll ---
    const header = document.querySelector('.main-header');
    if(header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }
        });
    }
// 3. Lógica del Popup de Calendly
// Usamos window.onload para asegurarnos de que el script externo de Calendly
// se haya cargado completamente antes de intentar usarlo.
window.onload = function() {
    // Comprueba si el objeto 'Calendly' existe en la ventana global
    if (typeof Calendly !== 'undefined') {
        Calendly.initPopupWidget({
            url: 'https://calendly.com/jchamorrorodriguez',
            text: 'Reservar Cita',
            color: '#C00000', // Color primario de tu marca
            textColor: '#FFFFFF',
            branding: true
        });
    } else {
        // Muestra un error en la consola si el script de Calendly no se carga
        console.error('El script de Calendly no se ha cargado correctamente.');
    }
};

});

