const reorder = document.getElementById("reorder");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const modal = document.getElementById("modal-crear-reporte");
const botonCrearReporte = document.getElementById("btn-crear-reporte");
const cerrarModal = document.getElementById("cerrar-modal");

menu.addEventListener("click", () => {
   barraLateral.classList.toggle("max-barra-lateral");
   if(barraLateral.classList.contains("max-barra-lateral")){
      menu.children[0].style.display = "none";
      menu.children[1].style.display = "block";
   }
   else{
      menu.children[0].style.display = "block";
      menu.children[1].style.display = "none";
   }
   if(window.innerWidth <= 320){
      barraLateral.classList.toggle("mini-barra-lateral");
      main.classList.add("min-main");
    
      spans.forEach((span) => {
        span.classList.toggle("oculto");
      });
   }
});

palanca.addEventListener("click", () => {

   let body = document.body;
   body.classList.toggle("dark-mode");
   circulo.classList.toggle("encendido");

});


reorder.addEventListener("click",()=> {
   barraLateral.classList.toggle("mini-barra-lateral");
   main.classList.toggle("min-main");
   spans.forEach((span) => {
        span.classList.toggle("oculto");
     });

});

// Mostrar el modal cuando se haga clic en el botón "Crear Reporte"
botonCrearReporte.addEventListener("click", (e) => {
   e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
   modal.style.display = "flex"; // Muestra el modal
});

// Cerrar el modal cuando se haga clic en la "X"
cerrarModal.addEventListener("click", () => {
   modal.style.display = "none"; // Ocultar el modal
});

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.addEventListener("click", (e) => {
   if (e.target === modal) {
       modal.style.display = "none";
   }
});

// Asocia cada botón con su sección
const enlaces = {
   "link-inicio": "seccion-inicio",
   "btn-crear-reporte": "seccion-crear-reporte",
   "link-reportes": "seccion-reportes",
   "link-directorio": "seccion-directorio",
   "link-adopciones": "seccion-adopciones",
   "link-cuidados": "seccion-cuidados"
};

// Oculta todas las secciones
function ocultarSecciones() {
   document.querySelectorAll(".seccion").forEach(seccion => {
       seccion.style.display = "none";
   });
}

// Muestra la sección seleccionada
function mostrarSeccion(idSeccion) {
   ocultarSecciones();
   const seccion = document.getElementById(idSeccion);
   if (seccion) {
       seccion.style.display = "block";
   }
}

// Agrega eventos a cada link
for (const idLink in enlaces) {
   const boton = document.getElementById(idLink);
   boton?.addEventListener("click", (e) => {
       e.preventDefault();
       mostrarSeccion(enlaces[idLink]);
   });
}


