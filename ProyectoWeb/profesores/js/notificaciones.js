// /estudiantes/js/notificaciones.js

// Datos de notificaciones simulados (puedes reemplazarlos con datos reales de tu backend)
const notificaciones = [
    {
      id: 1,
      empresa: "Tech Solutions",
      proyecto: "Desarrollo de Aplicación Móvil",
      hora: "2024-04-25T14:30:00",
      estado: "aceptado"
    },
    {
      id: 2,
      empresa: "Online Market",
      proyecto: "Sitio Web E-commerce",
      hora: "2024-04-24T09:15:00",
      estado: "rechazado"
    },
    {
      id: 3,
      empresa: "Game Studios",
      proyecto: "Desarrollo de Videojuego",
      hora: "2024-04-23T16:45:00",
      estado: "aceptado"
    },
    // Puedes agregar más notificaciones aquí
  ];
  
  // Función para formatear la fecha y hora
  function formatearFechaHora(fechaHora) {
    const options = {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    };
    const fecha = new Date(fechaHora);
    return fecha.toLocaleDateString('es-ES', options);
  }
  
  // Función para calcular el tiempo transcurrido desde la notificación
  function calcularTiempoTranscurrido(fechaHora) {
    const ahora = new Date();
    const notificacionFecha = new Date(fechaHora);
    const diferenciaMs = ahora - notificacionFecha;
  
    const segundos = Math.floor(diferenciaMs / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
  
    if (dias > 0) {
      return `${dias}d`;
    } else if (horas > 0) {
      return `${horas}h`;
    } else if (minutos > 0) {
      return `${minutos}m`;
    } else {
      return 'Ahora';
    }
  }
  
  // Función para renderizar las notificaciones en el DOM
  function renderizarNotificaciones() {
    const notificacionesContainer = document.getElementById('notificacionesLista');
    
    if (!notificacionesContainer) {
      console.error('El elemento con ID "notificacionesLista" no se encontró en el DOM.');
      return;
    }
  
    // Limpiar contenido previo
    notificacionesContainer.innerHTML = '';
  
    if (notificaciones.length === 0) {
      notificacionesContainer.innerHTML = '<p class="text-center">No tienes notificaciones.</p>';
      actualizarContadorNotificaciones();
      return;
    }
  
    notificaciones.forEach(notificacion => {
      // Crear el contenedor de la notificación
      const item = document.createElement('div');
      item.classList.add('notification-item');
  
      // Agregar clase según el estado
      if (notificacion.estado === 'aceptado') {
        item.classList.add('notification-aceptado');
      } else if (notificacion.estado === 'rechazado') {
        item.classList.add('notification-rechazado');
      }
  
      // Icono según el estado
      const icono = document.createElement('i');
      icono.classList.add('notification-icon', 'fas');
      if (notificacion.estado === 'aceptado') {
        icono.classList.add('fa-check-circle', 'text-success');
      } else if (notificacion.estado === 'rechazado') {
        icono.classList.add('fa-times-circle', 'text-danger');
      }
  
      // Contenido de la notificación
      const contenido = document.createElement('div');
      contenido.classList.add('notification-content');
  
      const titulo = document.createElement('h6');
      titulo.textContent = `${notificacion.empresa} - ${notificacion.proyecto}`;
  
      const hora = document.createElement('p');
      hora.textContent = formatearFechaHora(notificacion.hora);
  
      contenido.appendChild(titulo);
      contenido.appendChild(hora);
  
      // Tiempo de la notificación
      const tiempo = document.createElement('div');
      tiempo.classList.add('notification-time');
      tiempo.textContent = calcularTiempoTranscurrido(notificacion.hora);
  
      // Agregar elementos al item
      item.appendChild(icono);
      item.appendChild(contenido);
      item.appendChild(tiempo);
  
      // Agregar el item al contenedor
      notificacionesContainer.appendChild(item);
    });
  
    // Actualizar el contador de notificaciones
    actualizarContadorNotificaciones();
  }
  
  // Función para contar las notificaciones y actualizar el badge
  function actualizarContadorNotificaciones() {
    const notificacionesCount = document.getElementById('notificacionesCount');
    if (notificacionesCount) {
      notificacionesCount.textContent = notificaciones.length;
      if (notificaciones.length > 0) {
        notificacionesCount.style.display = 'inline-block';
      } else {
        notificacionesCount.style.display = 'none';
      }
    }
  }
  
  // Inicializar las notificaciones
  renderizarNotificaciones();
  