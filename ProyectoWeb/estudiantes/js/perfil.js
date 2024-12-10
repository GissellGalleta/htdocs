// /estudiantes/js/perfil.js

// Función para cargar la información del perfil
function cargarPerfil() {
  // Actualizar la información en el HTML
  const perfilImagen = document.getElementById('perfilImagen');
  const perfilNombre = document.getElementById('perfilNombre');
  const perfilNombreCompleto = document.getElementById('perfilNombreCompleto');
  const perfilEmail = document.getElementById('perfilEmail');
  const perfilFechaNacimiento = document.getElementById('perfilFechaNacimiento');
  const perfilUniversidad = document.getElementById('perfilUniversidad');
  const perfilSemestre = document.getElementById('perfilSemestre');
  const perfilHabilidades = document.getElementById('perfilHabilidades');

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
  if (perfilHabilidades) {
    perfilHabilidades.innerHTML = ''; // Limpiar contenido previo
    estudiante.habilidades.forEach(habilidad => {
      const li = document.createElement('li');
      li.classList.add('list-inline-item');
      const span = document.createElement('span');
      span.classList.add('badge', 'bg-primary', 'me-1', 'mb-1');
      span.textContent = habilidad;
      li.appendChild(span);
      perfilHabilidades.appendChild(li);
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
