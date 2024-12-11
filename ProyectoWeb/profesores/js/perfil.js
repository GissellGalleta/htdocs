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
  c