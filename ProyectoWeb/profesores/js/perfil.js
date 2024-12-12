// /profesores/js/perfil.js

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
  
  // Función para cargar imagen de perfil o ícono de usuario
  function cargarImagenPerfil() {
    const imagenPerfil = document.getElementById('imagenPerfil');
    if (profesor.imagenPerfil && profesor.imagenPerfil.trim() !== '') {
      imagenPerfil.src = profesor.imagenPerfil;
    } else {
      imagenPerfil.src = 'https://via.placeholder.com/30x30.png?text=👤';
    }
  }
  
  // Función para cargar la información del perfil
  function cargarPerfil() {
      // Realizar una solicitud para obtener el JSON local
      fetch('../data/perfil.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          // Actualizar la información en el HTML con los datos recibidos
          document.getElementById('perfilImagen').src = data.imagen || '../assets/perfil.png';
          document.getElementById('perfilNombre').textContent = data.nombre;
          document.getElementById('perfilEmail').textContent = data.email;
          document.getElementById('perfilNombreCompleto').textContent = data.nombreCompleto;
          
          // Formatear la fecha de nacimiento
          const fecha = new Date(data.fechaNacimiento);
          const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
          const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
          document.getElementById('perfilFechaNacimiento').textContent = fechaFormateada;
          
          document.getElementById('perfilEspecialidad').textContent = data.especialidad;
          document.getElementById('perfilAñosLaborando').textContent = data.añosLaborando;
    
        })
        .catch(error => {
          console.error('Error al cargar el perfil:', error);
          // Opcional: Mostrar un mensaje de error en el HTML
          const mainContent = document.querySelector('main.container');
          mainContent.innerHTML = '<p class="text-danger">Error al cargar el perfil. Por favor, inténtalo más tarde.</p>';
        });
    }
    
    // Función para editar el perfil
    function editarPerfil() {
      alert('Función para editar el perfil en desarrollo.');
    }