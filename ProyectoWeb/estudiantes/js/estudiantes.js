// /estudiantes/js/estudiantes.js

// Datos pre-cargados simulando una respuesta de la base de datos
const estudiante = {
  nombre: "Juan",
  apellido: "Pérez",
  email: "juan.perez@example.com",
  imagenPerfil: "../assets/perfil.jpg", // Ruta de la imagen de perfil, si no hay, dejar null o ''
  fechaNacimiento: "1995-08-15",
  resumen: "Soy un estudiante de Ingeniería en Sistemas con experiencia en desarrollo web y aplicaciones móviles. Busco oportunidades para aplicar mis conocimientos y seguir creciendo profesionalmente.",
  titulos: ["Ingeniero en Sistemas"],
  universidad: "IT Veracruz",
  semestre: 7,
  certificados: ["Certificado en Desarrollo Web", "Diplomado en Gestión de Proyectos"],
  habilidades: ["HTML", "CSS", "JavaScript", "Inglés - Avanzado"],
  idiomas: ["Español - Nativo", "Inglés - Avanzado"],
  proyectosActivos: [
    {
      id: 3,
      titulo: "Desarrollo de Página Web",
      descripcion: "Crear una página web corporativa para una empresa ficticia.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      empresa: "Creative Minds",
      estado: "En progreso",
      progreso: 45,
      imagen: "../assets/proyecto3.jpg",
      compañeros: ["Ana Gómez", "Luis Martínez"],
      maestroAsesor: "Dr. Carlos Ruiz"
    }
    // Puedes agregar más proyectos activos aquí
  ],
  limiteProyectos: 5
};

// Lista de proyectos disponibles
const proyectosDisponibles = [
  {
    id: 1,
    titulo: "Desarrollo de Aplicación Móvil",
    descripcion: "Crear una aplicación móvil para gestión de tareas.",
    tecnologias: ["Flutter", "Firebase"],
    empresa: "Tech Solutions",
    imagen: "../assets/proyecto1.jpg"
  },
  {
    id: 2,
    titulo: "Sitio Web E-commerce",
    descripcion: "Desarrollar una plataforma de comercio electrónico.",
    tecnologias: ["React", "Node.js", "MongoDB"],
    empresa: "Online Market",
    imagen: "../assets/proyecto2.jpg"
  },
  {
    id: 4,
    titulo: "Desarrollo de Software de Gestión",
    descripcion: "Crear un software de gestión para una empresa de logística.",
    tecnologias: ["Java", "Spring Boot", "MySQL"],
    empresa: "Logistic Solutions",
    imagen: "../assets/proyecto4.jpg"
  },
  {
    id: 5,
    titulo: "Desarrollo de Videojuego",
    descripcion: "Desarrollar un videojuego de plataformas en 2D.",
    tecnologias: ["Unity", "C#"],
    empresa: "Game Studios",
    imagen: "../assets/proyecto5.jpg"
  },
  {
    id: 6,
    titulo: "Desarrollo de Aplicación Web",
    descripcion: "Crear una aplicación web para gestión de inventarios.",
    tecnologias: ["Angular", "Node.js", "MongoDB"],
    empresa: "Inventive Solutions",
    imagen: "../assets/proyecto6.jpg"
  }
  // Agregar más proyectos disponibles según sea necesario
];

// Variable para rastrear la vista actual
let currentView = 'dashboard'; // Vista por defecto

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
  if (imagenPerfil) {
    if (estudiante.imagenPerfil && estudiante.imagenPerfil.trim() !== '') {
      imagenPerfil.src = estudiante.imagenPerfil;
    } else {
      imagenPerfil.src = 'https://via.placeholder.com/30x30.png?text=👤';
    }
  } else {
    console.error('El elemento con ID "imagenPerfil" no se encontró en el DOM.');
  }
}

// Función para cargar el perfil
function cargarPerfil() {
  // Actualizar la información en el HTML
  const perfilImagen = document.getElementById('perfilImagen');
  const perfilNombre = document.getElementById('perfilNombre');
  const perfilNombreCompleto = document.getElementById('perfilNombreCompleto');
  const perfilEmail = document.getElementById('perfilEmail');
  const perfilFechaNacimiento = document.getElementById('perfilFechaNacimiento');
  const perfilTitulos = document.getElementById('perfilTitulos');
  const perfilUniversidad = document.getElementById('perfilUniversidad');
  const perfilSemestre = document.getElementById('perfilSemestre');
  const certificadosList = document.getElementById('perfilCertificados');
  const habilidadesList = document.getElementById('perfilHabilidades');
  const idiomasList = document.getElementById('perfilIdiomas');

  if (perfilImagen) {
    perfilImagen.src = estudiante.imagenPerfil || 'https://via.placeholder.com/150';
  } else {
    console.error('El elemento con ID "perfilImagen" no se encontró en el DOM.');
  }

  if (perfilNombre) {
    perfilNombre.textContent = `${estudiante.nombre} ${estudiante.apellido}`;
  } else {
    console.error('El elemento con ID "perfilNombre" no se encontró en el DOM.');
  }

  if (perfilNombreCompleto) {
    perfilNombreCompleto.textContent = `${estudiante.nombre} ${estudiante.apellido}`;
  } else {
    console.error('El elemento con ID "perfilNombreCompleto" no se encontró en el DOM.');
  }

  if (perfilEmail) {
    perfilEmail.textContent = estudiante.email;
  } else {
    console.error('El elemento con ID "perfilEmail" no se encontró en el DOM.');
  }

  if (perfilFechaNacimiento) {
    perfilFechaNacimiento.textContent = formatearFecha(estudiante.fechaNacimiento);
  } else {
    console.error('El elemento con ID "perfilFechaNacimiento" no se encontró en el DOM.');
  }

  if (perfilUniversidad) {
    perfilUniversidad.textContent = estudiante.universidad;
  } else {
    console.error('El elemento con ID "perfilUniversidad" no se encontró en el DOM.');
  }

  if (perfilSemestre) {
    perfilSemestre.textContent = `${estudiante.semestre}°`;
  } else {
    console.error('El elemento con ID "perfilSemestre" no se encontró en el DOM.');
  }

  // Cargar habilidades
  if (habilidadesList) {
    habilidadesList.innerHTML = ''; // Limpiar contenido previo
    estudiante.habilidades.forEach(habilidad => {
      const li = document.createElement('li');
      li.classList.add('list-inline-item');
      const span = document.createElement('span');
      span.classList.add('badge', 'bg-primary', 'me-1', 'mb-1');
      span.textContent = habilidad;
      li.appendChild(span);
      habilidadesList.appendChild(li);
    });
  } else {
    console.error('El elemento con ID "perfilHabilidades" no se encontró en el DOM.');
  }
}

// Función para formatear la fecha de nacimiento
function formatearFecha(fecha) {
  const fechaObj = new Date(fecha);
  const dia = String(fechaObj.getDate()).padStart(2, '0');
  const mes = String(fechaObj.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript empiezan en 0
  const año = fechaObj.getFullYear();
  return `${dia}/${mes}/${año}`;
}

// Función para editar el perfil
function editarPerfil() {
  alert('Función para editar el perfil en desarrollo.');
}

// Función para cargar el Dashboard
function cargarDashboard() {
  // Actualizar imagen de perfil o ícono
  cargarImagenPerfil();

  // Cargar la lista de proyectos según la vista actual
  if (currentView === 'disponibles') {
    mostrarProyectosDisponibles();
  } else if (currentView === 'mis') {
    mostrarMisProyectos();
  } else {
    // Comportamiento por defecto
    if (estudiante.proyectosActivos.length > 3) {
      mostrarMisProyectos();
    } else {
      mostrarProyectosDisponibles();
    }
  }
}

// Función para mostrar proyectos disponibles
function mostrarProyectosDisponibles() {
  const tituloProyectos = document.getElementById('tituloProyectos');
  const proyectosLista = document.getElementById('proyectosLista');

  if (tituloProyectos) {
    tituloProyectos.textContent = 'Proyectos Disponibles';
  } else {
    console.error('El elemento con ID "tituloProyectos" no se encontró en el DOM.');
  }

  if (proyectosLista) {
    proyectosLista.innerHTML = ''; // Limpiar contenido previo

    proyectosDisponibles.forEach(proyecto => {
      const proyectoCol = document.createElement('div');
      proyectoCol.classList.add('col-md-4');

      const proyectoCard = document.createElement('div');
      proyectoCard.classList.add('card', 'mb-4');

      // Imagen del proyecto
      const img = document.createElement('img');
      img.src = proyecto.imagen || '../assets/default-project.jpg';
      img.classList.add('card-img-top');
      img.alt = proyecto.titulo;

      // Cuerpo de la tarjeta
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const titulo = document.createElement('h5');
      titulo.classList.add('card-title');
      titulo.textContent = proyecto.titulo;

      const descripcion = document.createElement('p');
      descripcion.classList.add('card-text');
      descripcion.textContent = proyecto.descripcion;

      const tecnologias = document.createElement('p');
      tecnologias.classList.add('card-text');
      tecnologias.innerHTML = `<strong>Tecnologías:</strong> ${proyecto.tecnologias.join(', ')}`;

      const empresa = document.createElement('p');
      empresa.classList.add('card-text');
      empresa.innerHTML = `<strong>Empresa:</strong> ${proyecto.empresa}`;

      const botonParticipar = document.createElement('button');
      botonParticipar.classList.add('btn', 'btn-warning');
      botonParticipar.textContent = 'Participar';
      botonParticipar.onclick = function () {
        participarProyecto(proyecto.id);
      };

      // Agregar elementos al cardBody
      cardBody.appendChild(titulo);
      cardBody.appendChild(descripcion);
      cardBody.appendChild(tecnologias);
      cardBody.appendChild(empresa);
      cardBody.appendChild(botonParticipar);

      // Agregar imagen y cardBody a la tarjeta
      proyectoCard.appendChild(img);
      proyectoCard.appendChild(cardBody);

      // Agregar la tarjeta a la columna
      proyectoCol.appendChild(proyectoCard);

      // Agregar la columna al contenedor
      proyectosLista.appendChild(proyectoCol);
    });
  } else {
    console.error('El elemento con ID "proyectosLista" no se encontró en el DOM.');
  }
}

// Función para mostrar mis proyectos
function mostrarMisProyectos() {
  const tituloProyectos = document.getElementById('tituloProyectos');
  const proyectosLista = document.getElementById('proyectosLista');

  if (tituloProyectos) {
    tituloProyectos.textContent = 'Mis Proyectos';
  } else {
    console.error('El elemento con ID "tituloProyectos" no se encontró en el DOM.');
  }

  if (proyectosLista) {
    proyectosLista.innerHTML = ''; // Limpiar contenido previo

    estudiante.proyectosActivos.forEach(proyecto => {
      const proyectoCol = document.createElement('div');
      proyectoCol.classList.add('col-md-4');

      const proyectoCard = document.createElement('div');
      proyectoCard.classList.add('card', 'mb-4');

      // Imagen del proyecto
      const img = document.createElement('img');
      img.src = proyecto.imagen || '../assets/default-project.jpg';
      img.classList.add('card-img-top');
      img.alt = proyecto.titulo;

      // Cuerpo de la tarjeta
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const titulo = document.createElement('h5');
      titulo.classList.add('card-title');
      titulo.textContent = proyecto.titulo;

      const estado = document.createElement('p');
      estado.classList.add('card-text');
      estado.innerHTML = `<strong>Estado:</strong> ${proyecto.estado}`;

      const progreso = document.createElement('p');
      progreso.classList.add('card-text');
      progreso.innerHTML = `<strong>Progreso:</strong> ${proyecto.progreso}%`;

      const botonVerDetalles = document.createElement('button');
      botonVerDetalles.classList.add('btn', 'btn-success');
      botonVerDetalles.textContent = 'Ver Detalles';
      botonVerDetalles.onclick = function () {
        verDetalleProyecto(proyecto.id);
      };

      // Agregar elementos al cardBody
      cardBody.appendChild(titulo);
      cardBody.appendChild(estado);
      cardBody.appendChild(progreso);
      cardBody.appendChild(botonVerDetalles);

      // Agregar imagen y cardBody a la tarjeta
      proyectoCard.appendChild(img);
      proyectoCard.appendChild(cardBody);

      // Agregar la tarjeta a la columna
      proyectoCol.appendChild(proyectoCard);

      // Agregar la columna al contenedor
      proyectosLista.appendChild(proyectoCol);
    });
  } else {
    console.error('El elemento con ID "proyectosLista" no se encontró en el DOM.');
  }
}

// Función para participar en un proyecto
function participarProyecto(idProyecto) {
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
  window.location.href = `proyecto-detalle.html?id=${idProyecto}`;
}

// Función para aplicar filtros
function aplicarFiltros() {
  const query = document.getElementById('filtroBusqueda').value.toLowerCase();
  const proyectosLista = document.getElementById('proyectosLista');
  const tituloProyectos = document.getElementById('tituloProyectos');

  let proyectosAFiltrar = [];

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

  // Filtrar proyectos
  const proyectosFiltrados = proyectosAFiltrar.filter(proyecto =>
    proyecto.titulo.toLowerCase().includes(query) ||
    proyecto.descripcion.toLowerCase().includes(query) ||
    proyecto.tecnologias.some(tecnologia => tecnologia.toLowerCase().includes(query)) ||
    proyecto.empresa.toLowerCase().includes(query)
  );

  // Mostrar proyectos filtrados
  if (proyectosLista) {
    proyectosLista.innerHTML = ''; // Limpiar contenido previo

    if (proyectosFiltrados.length === 0) {
      proyectosLista.innerHTML = `<p class="text-center">No se encontraron proyectos que coincidan con tu búsqueda.</p>`;
    } else {
      proyectosFiltrados.forEach(proyecto => {
        const proyectoCol = document.createElement('div');
        proyectoCol.classList.add('col-md-4');

        const proyectoCard = document.createElement('div');
        proyectoCard.classList.add('card', 'mb-4');

        // Imagen del proyecto
        const img = document.createElement('img');
        img.src = proyecto.imagen || '../assets/default-project.jpg';
        img.classList.add('card-img-top');
        img.alt = proyecto.titulo;

        // Cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const titulo = document.createElement('h5');
        titulo.classList.add('card-title');
        titulo.textContent = proyecto.titulo;

        if (currentView === 'mis' || estudiante.proyectosActivos.includes(proyecto)) {
          // Si el proyecto está en proyectos activos
          const estado = document.createElement('p');
          estado.classList.add('card-text');
          estado.innerHTML = `<strong>Estado:</strong> ${proyecto.estado}`;

          const progreso = document.createElement('p');
          progreso.classList.add('card-text');
          progreso.innerHTML = `<strong>Progreso:</strong> ${proyecto.progreso}%`;

          const botonVerDetalles = document.createElement('button');
          botonVerDetalles.classList.add('btn', 'btn-success');
          botonVerDetalles.textContent = 'Ver Detalles';
          botonVerDetalles.onclick = function () {
            verDetalleProyecto(proyecto.id);
          };

          cardBody.appendChild(titulo);
          cardBody.appendChild(estado);
          cardBody.appendChild(progreso);
          cardBody.appendChild(botonVerDetalles);
        } else {
          // Si el proyecto está en proyectos disponibles
          const descripcion = document.createElement('p');
          descripcion.classList.add('card-text');
          descripcion.textContent = proyecto.descripcion;

          const tecnologias = document.createElement('p');
          tecnologias.classList.add('card-text');
          tecnologias.innerHTML = `<strong>Tecnologías:</strong> ${proyecto.tecnologias.join(', ')}`;

          const empresa = document.createElement('p');
          empresa.classList.add('card-text');
          empresa.innerHTML = `<strong>Empresa:</strong> ${proyecto.empresa}`;

          const botonParticipar = document.createElement('button');
          botonParticipar.classList.add('btn', 'btn-warning');
          botonParticipar.textContent = 'Participar';
          botonParticipar.onclick = function () {
            participarProyecto(proyecto.id);
          };

          cardBody.appendChild(titulo);
          cardBody.appendChild(descripcion);
          cardBody.appendChild(tecnologias);
          cardBody.appendChild(empresa);
          cardBody.appendChild(botonParticipar);
        }

        // Agregar imagen y cardBody a la tarjeta
        proyectoCard.appendChild(img);
        proyectoCard.appendChild(cardBody);

        // Agregar la tarjeta a la columna
        proyectoCol.appendChild(proyectoCard);

        // Agregar la columna al contenedor
        proyectosLista.appendChild(proyectoCol);
      });
    }
  } else {
    console.error('El elemento con ID "proyectosLista" no se encontró en el DOM.');
  }
}

// Función para manejar el toggle del sidebar (Mostrar/Ocultar)
function toggleSidebar(show) {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  if (show) {
    sidebar.classList.add('active');
    if (!document.body.contains(overlay)) {
      document.body.appendChild(overlay);
    }
  } else {
    sidebar.classList.remove('active');
    if (document.body.contains(overlay)) {
      document.body.removeChild(overlay);
    }
  }
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

// Llamar a esta función después de renderizar las notificaciones
function renderizarNotificaciones() {
  const notificacionesContainer = document.getElementById('notificacionesLista');
  
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