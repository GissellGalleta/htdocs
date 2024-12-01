// /empresas/js/crear-proyecto.js
// Función para inicializar el sidebar
function inicializarSidebar() {
  const sidebar = document.getElementById('sidebar');
  const btnSidebarToggle = document.getElementById('btnSidebarToggle');
  const btnCloseSidebar = document.getElementById('btnCloseSidebar');
  const overlay = document.createElement('div');
  overlay.id = 'overlay';

  // Abrir el sidebar
  btnSidebarToggle.addEventListener('click', function() {
    sidebar.classList.add('active');
    document.body.appendChild(overlay);
  });

  // Cerrar el sidebar
  btnCloseSidebar.addEventListener('click', function() {
    sidebar.classList.remove('active');
    document.body.removeChild(overlay);
  });

  // Cerrar el sidebar al hacer clic fuera de él
  overlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    document.body.removeChild(overlay);
  });
}

document.addEventListener('DOMContentLoaded', function() {
    const formCrearProyecto = document.getElementById('formCrearProyecto');
  
    formCrearProyecto.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío del formulario
  
      // Recopilar los datos del formulario
      const proyectoData = {
        imagen: document.getElementById('imagenProyecto').files[0], // Archivo de imagen
        nombre: document.getElementById('nombreProyecto').value,
        titulo: document.getElementById('tituloProyecto').value,
        descripcion: document.getElementById('descripcionProyecto').value,
        categoria: document.getElementById('categoriaProyecto').value,
        fechaInicio: document.getElementById('fechaInicio').value,
        fechaFin: document.getElementById('fechaFin').value
      };
  
      // Mostrar los datos en la consola (puedes eliminar esto más adelante)
      console.log('Datos del proyecto:', proyectoData);
  
      // Simulación de envío al backend
      alert('Proyecto creado exitosamente.');
  
      // Redirigir a la página "Mis proyectos"
      window.location.href = 'mis-proyectos.html';
    });
  });





  