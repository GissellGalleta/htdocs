// /estudiantes/js/estudiantes.js

// Datos pre-cargados simulando una respuesta de la base de datos
const estudiante = {
    nombre: "Juan",
    apellido: "Pérez",
    imagenPerfil: "../assets/perfil.jpg", // Ruta de la imagen de perfil, si no hay, dejar null o ''
    proyectosActivos: [
     
      // Puedes agregar más proyectos activos aquí
    ],
    limiteProyectos: 5
  };
  
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
  
  // Función para cargar el Dashboard
  function cargarDashboard() {
    // Actualizar imagen de perfil o ícono
    cargarImagenPerfil();
  
    // Determinar si mostrar proyectos disponibles o activos
    if (estudiante.proyectosActivos.length > 3) {
      mostrarMisProyectos();
    } else {
      mostrarProyectosDisponibles();
    }
  }
  
  // Función para cargar imagen de perfil o ícono de usuario
  function cargarImagenPerfil() {
    const imagenPerfil = document.getElementById('imagenPerfil');
    if (estudiante.imagenPerfil && estudiante.imagenPerfil.trim() !== '') {
      imagenPerfil.src = estudiante.imagenPerfil;
    } else {
      imagenPerfil.src = 'https://via.placeholder.com/30x30.png?text=👤';
    }
  }
  
  // Función para mostrar proyectos disponibles
  function mostrarProyectosDisponibles() {
    document.getElementById('tituloProyectos').textContent = 'Proyectos Disponibles';
    const proyectosLista = document.getElementById('proyectosLista');
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
      botonParticipar.onclick = function() {
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
  }
  
  // Función para mostrar mis proyectos
  function mostrarMisProyectos() {
    document.getElementById('tituloProyectos').textContent = 'Mis Proyectos';
    const proyectosLista = document.getElementById('proyectosLista');
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
      botonVerDetalles.onclick = function() {
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
      estudiante.proyectosActivos.push({
        ...proyectoSeleccionado,
        estado: "En progreso",
        progreso: 0,
        compañeros: [],
        maestroAsesor: "Por asignar"
      });
  
      // Remover el proyecto de la lista de proyectos disponibles
      proyectosDisponibles.splice(proyectosDisponibles.indexOf(proyectoSeleccionado), 1);
  
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
  
    let proyectosAFiltrar = [];
  
    if (estudiante.proyectosActivos.length > 3) {
      proyectosAFiltrar = estudiante.proyectosActivos;
    } else {
      proyectosAFiltrar = proyectosDisponibles;
    }
  
    // Filtrar proyectos
    const proyectosFiltrados = proyectosAFiltrar.filter(proyecto =>
      proyecto.titulo.toLowerCase().includes(query) ||
      proyecto.descripcion.toLowerCase().includes(query) ||
      proyecto.tecnologias.some(tecnologia => tecnologia.toLowerCase().includes(query)) ||
      proyecto.empresa.toLowerCase().includes(query)
    );
  
    // Mostrar proyectos filtrados
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
  
        if (estudiante.proyectosActivos.includes(proyecto)) {
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
          botonVerDetalles.onclick = function() {
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
          botonParticipar.onclick = function() {
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
  }




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
  
  // ... (resto del código) ...


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
      console.error('El elemento imagenPerfil no se encontró en el DOM.');
    }
  }
  
  
  
  