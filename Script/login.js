document.addEventListener('DOMContentLoaded', function() {
    // Espera a que el DOM esté completamente cargado
    const loginLink = document.getElementById('loginLink');
    
    if (loginLink) {
        loginLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto (recargar la página)
            console.log("Redirigiendo a login...");
            window.location.href = 'Paginas/login.html';  // Redirige a login.html en el directorio superior

        });
    }
});

// En login.html, redirige a registrarse.html cuando se hace clic en "Regístrate aquí"
document.getElementById('showRegister').addEventListener('click', function(event) {
    event.preventDefault();  // Evita que el enlace recargue la página
    window.location.href = 'registrarse.html';  // Redirige a la página de registro
});

// En registrarse.html, redirige a login.html cuando se hace clic en "Inicia sesión aquí"
document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();  // Evita que el enlace recargue la página
    window.location.href = 'login.html';  // Redirige a la página de login
});



