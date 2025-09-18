document.addEventListener('DOMContentLoaded', function() {

    // --- Menú de Navegación Móvil ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
            // Animación del botón hamburguesa
            this.classList.toggle('is-active'); 
        });
    }

    // --- Cerrar menú al hacer clic en un enlace (para SPAs o páginas con anclas) ---
    const menuLinks = document.querySelectorAll('#main-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainMenu.classList.contains('active')) {
                mainMenu.classList.remove('active');
                menuToggle.classList.remove('is-active');
            }
        });
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

});
