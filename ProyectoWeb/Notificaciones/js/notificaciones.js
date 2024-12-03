// /ProyectoWeb/Notificaciones/js/notificaciones.js

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
  
  // Función para cargar las notificaciones
  function cargarNotificaciones(userType) {
    // Realizar una solicitud para obtener el JSON de notificaciones
    fetch('/ProyectoWeb/Notificaciones/data/notificaciones.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar las notificaciones: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        mostrarNotificaciones(data, userType);
      })
      .catch(error => {
        console.error('Error:', error);
        // Mostrar un mensaje de error en la página
        const listaNotificaciones = document.getElementById('listaNotificaciones');
        listaNotificaciones.innerHTML = '<p class="text-danger">Error al cargar las notificaciones.</p>';
      });
  }
  
  // Función para mostrar las notificaciones en la página
  function mostrarNotificaciones(notificaciones, userType) {
    const listaNotificaciones = document.getElementById('listaNotificaciones');
    listaNotificaciones.innerHTML = ''; // Limpiar contenido previo
  
    // Filtrar notificaciones según el tipo de usuario
    const notificacionesFiltradas = notificaciones.filter(notificacion => notificacion.destinatario === userType);
  
    if (notificacionesFiltradas.length === 0) {
      listaNotificaciones.innerHTML = '<p>No tienes notificaciones.</p>';
      return;
    }
  
    notificacionesFiltradas.forEach(notificacion => {
      const item = document.createElement('a');
      item.href = notificacion.enlace || '#';
      item.className = 'list-group-item list-group-item-action';
      item.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${notificacion.titulo}</h5>
          <small>${formatearFecha(notificacion.fecha)}</small>
        </div>
        <p class="mb-1">${notificacion.mensaje}</p>
      `;
      listaNotificaciones.appendChild(item);
    });
  }
  
  // Función para formatear fechas
  function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  }
  