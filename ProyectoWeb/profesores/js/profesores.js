// /estudiantes/js/estudiantes.js

let estudiante = null;
let proyectosDisponibles = [];
let currentView = 'dashboard'; // Vista por defecto

// Función para cargar estudiante y proyectos desde JSON
function cargarDatos() {
  return Promise.all([
    fetch('../data/profesor.json').then(res => res.json()),
    fetch('../data/proyectosDisponibles.json').then(res => res.json())
  ]).then(data => {
    estudiante = data[0];
    proyectosDisponibles = data[1];
  }).catch(error => console.error('Error al cargar datos:', error));
}

// Función para cargar componentes HTML y ejecutar sus scripts
function cargarComponente(idElemento, url, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const elemento = document.getElementById(idElemento);
      if (elemento) {
        elemento.innerHTML = data;

        // Ejecutar scripts dentro del contenido cargado
        const scripts = elemento.querySelectorAll('script');
        scripts.forEach(script => {
          const newScript = document.createElement('script');
          if (script.src) {
            newScript.src = script.src;
            newScript.defer = script.defer;
          } else {
            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });

        if (callback) callback();
      } else {
        console.error(`El elemento con ID "${idElemento}" no se encontró en el DOM.`);
      }
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

  if (!btnSidebarToggle) {
    console.error('El elemento con ID "btnSidebarToggle" no se encontró en el DOM.');
    return;
  }

  if (!btnCloseSidebar) {
    console.error('El elemento con ID "btnCloseSidebar" no se encontró en el DOM.');
    return;
  }

  // Abrir el sidebar
  btnSidebarToggle.addEventListener('click', function () {
    sidebar.classList.add('active');
    document.body.appendChild(overlay);
  });

  // Cerrar el sidebar
  btnCloseSidebar.addEventListener('click', function () {
    sidebar.classList.remove('active');
    if (document.body.contains(overlay)) {
      document.body.removeChild(overlay);
    }
  });

  // Cerrar el sidebar al hacer clic fuera de él
  overlay.addEventListener('click', function () {
    sidebar.classList.remove('active');
    if (document.body.contains(overlay)) {
      document.body.removeChild(overlay);
    }
  });
}

// Función para cargar imagen de perfil o ícono de usuario
function cargarImagenPerfil() {
  const imagenPerfil = document.getElementById('imagenPerfil');
  if (imagenPerfil && estudiante) {
    if (estudiante.imagenPerfil && estudiante.imagenPerfil.trim() !== '') {
      imagenPerfil.src = estudiante.imagenPerfil;
    } else {
      imagenPerfil.src = 'https://via.placeholder.com/30x30.png?text=👤';
    }
  } else {
    console.error('El elemento con ID "imagenPerfil" no se encontró en el DOM o "estudiante" no está cargado.');
  }
}

// Función para formatear la fecha de nacimiento (utilidad)
function formatearFecha(fecha) {
  const fechaObj = new Date(fecha);
  const dia = String(fechaObj.getDate()).padStart(2, '0');
  const mes = String(fechaObj.getMonth() + 1).padStart(2, '0'); // Los meses en JS empiezan en 0
  const año = fechaObj.getFullYear();
  return `${dia}/${mes}/${año}`;
}

// Función para cargar el Dashboard
function cargarDashboard() {
  // Actualizar imagen de perfil o ícono
  cargarImagenPerfil();

  // Cargar la lista de proyectos según la vista actual
  if (currentView === 'disponibles') {
    // Cargar proyectos-disponibles.html
    cargarComponente('proyectosLista', '../views/proyectos-dispo.html', function() {
      // Aquí ya se ejecutará el script incluido en proyectos-disponibles.html
    });
  } else if (currentView === 'mis') {
    // Cargar mis-proyectos.html
    cargarComponente('proyectosLista', '../views/mis-proyectos.html', function() {
      // Aquí ya se ejecutará el script incluido en mis-proyectos.html
    });
  } else {
    // Vista por defecto
    cargarComponente('proyectosLista', '../views/proyectos-dispo.html', function() {});
  }
}

// Función para participar en un proyecto
function participarProyecto(idProyecto) {
  if (!proyectosDisponibles || !estudiante) {
    console.error('Datos no cargados aún.');
    return;
  }

  const proyectoSeleccionado = proyectosDisponibles.find(proyecto => proyecto.id === idProyecto);

  if (proyectoSeleccionado) {
    if (estudiante.proyectosActivos.length >= estudiante.limiteProyectos) {
      alert('Has alcanzado el límite máximo de proyectos activos.');
      return;
    }

    // Añadir el proyecto a los proyectos activos del estudiante
    const nuevoProyecto = {
      ...proyectoSeleccionado,
      descripcion: proyectoSeleccionado.descripcion || "",
      estado: "En progreso",
      progreso: 0,
      compañeros: [],
      maestroAsesor: "Por asignar"
    };
    estudiante.proyectosActivos.push(nuevoProyecto);

    // Remover el proyecto de la lista de proyectos disponibles
    const index = proyectosDisponibles.indexOf(proyectoSeleccionado);
    if (index > -1) {
      proyectosDisponibles.splice(index, 1);
    }

    // Actualizar el Dashboard
    cargarDashboard();

    alert(`Te has unido al proyecto: ${proyectoSeleccionado.titulo}`);
  } else {
    alert('El proyecto seleccionado no existe.');
  }
}

// Función para ver el detalle de un proyecto activo
function verDetalleProyecto(idProyecto) {
  // Redirige a la página de detalle del proyecto con el parámetro id
  window.location.href = `../views/detalle-proyecto.html?id=${idProyecto}`;
}

// Función para aplicar filtros
function aplicarFiltros() {
  const query = document.getElementById('filtroBusqueda').value.toLowerCase();
  const proyectosLista = document.getElementById('proyectosLista');
  const tituloProyectos = document.getElementById('tituloProyectos');

  let proyectosAFiltrar = [];

  if (!estudiante || !proyectosDisponibles) {
    console.error('Datos no cargados aún.');
    return;
  }

  if (currentView === 'mis') {
    proyectosAFiltrar = estudiante.proyectosActivos;
  } else if (currentView === 'disponibles') {
    proyectosAFiltrar = proyectosDisponibles;
  } else {
    // Vista por defecto
    if (estudiante.proyectosActivos.length > 3) {
      proyectosAFiltrar = estudiante.proyectosActivos;
    } else {
      proyectosAFiltrar = proyectosDisponibles;
    }
  }

  // Aquí puedes implementar una lógica para filtrar una lista ya mostrada
  // pero dado que ahora cargas los proyectos desde archivos parciales,
  // considera filtrar datos antes de renderizarlos.
  // Por simplicidad, no se implementa aquí la lógica de filtrado en el parcial.
}

// Esperar a que la ventana cargue para cargar los datos y luego el header, etc.
window.addEventListener('load', function() {
  // Cargar datos de JSON
  cargarDatos().then(() => {
    // Después de cargar los datos, podemos continuar con el flujo
    cargarComponente('header', '../componentes/header.html', function() {
      inicializarSidebar();
      cargarImagenPerfil();

      const sidebarLinks = document.querySelectorAll('.sidebar-link');
      sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
          // Manejo de navegación si fuera necesario
        });
      });

      // Manejar la navegación con los botones del navegador
      window.addEventListener('popstate', handleHashChange);

      // Cargar la vista según el hash inicial de la URL
      handleHashChange();
    });
  });
});

function handleHashChange() {
  const hash = window.location.hash.substring(1); // Quitar el '#'
  if (hash === 'disponibles' || hash === 'mis') {
    currentView = hash;
  } else {
    currentView = 'dashboard'; // Vista por defecto
  }
  cargarDashboard();
}