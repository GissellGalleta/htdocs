// /Proyectos/js/detalle-proyecto.js

// Función para cargar componentes HTML
function cargarComponente(idElemento, url, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(idElemento).innerHTML = data;
      if (callback) callback();
    })
    .catch(error => console.error('Error al cargar el componente:', error));
}

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

function cargarDetalleProyecto() {
    // Obtener el ID del proyecto desde los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const proyectoId = parseInt(urlParams.get('id'));
  
    if (!proyectoId) {
      mostrarError('No se ha especificado un proyecto válido.');
      return;
    }
  
    // Realizar una solicitud para obtener el JSON local
    fetch('../data/proyectos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar los proyectos: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Buscar el proyecto con el ID correspondiente
        const proyecto = data.find(p => p.id === proyectoId);
        if (proyecto) {
          mostrarDetalleProyecto(proyecto);
        } else {
          mostrarError('Proyecto no encontrado.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        mostrarError('Error al cargar los detalles del proyecto.');
      });
  }
  
  function mostrarDetalleProyecto(proyecto) {
    // Actualizar la imagen del proyecto
    const imagenProyecto = document.getElementById('detalleImagenProyecto');
    imagenProyecto.src = proyecto.imagen || '../assets/default-project.jpg';
    imagenProyecto.alt = proyecto.titulo;
  
    // Actualizar el título del proyecto
    document.getElementById('detalleTituloProyecto').textContent = proyecto.titulo;
  
    // Actualizar la descripción del proyecto
    document.getElementById('detalleDescripcionProyecto').textContent = proyecto.descripcion;
  
    // Actualizar la categoría del proyecto
    document.getElementById('detalleCategoriaProyecto').textContent = proyecto.categoria;
  
    // Actualizar el nombre de la empresa
    document.getElementById('detalleEmpresaProyecto').textContent = proyecto.empresa;
  
    // Formatear y actualizar la fecha de inicio
    const fechaInicio = new Date(proyecto.fechaInicio);
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaInicioFormateada = fechaInicio.toLocaleDateString('es-ES', opciones);
    document.getElementById('detalleFechaInicio').textContent = fechaInicioFormateada;
  
    // Formatear y actualizar la fecha de finalización
    const fechaFin = new Date(proyecto.fechaFin);
    const fechaFinFormateada = fechaFin.toLocaleDateString('es-ES', opciones);
    document.getElementById('detalleFechaFin').textContent = fechaFinFormateada;
  }
  
  function mostrarError(mensaje) {
    const mainContent = document.querySelector('main.container');
    mainContent.innerHTML = `<p class="text-danger">${mensaje}</p>`;
  }
  