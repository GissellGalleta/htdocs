// /estudiantes/js/perfil.js

function cargarPerfil() {
  // Realizar una solicitud para obtener el JSON local del estudiante
  fetch('../data/estudiante.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      // Actualizar la información en el HTML con los datos recibidos de estudiante.json
      const perfilImagen = document.getElementById('perfilImagen');
      const perfilNombre = document.getElementById('perfilNombre');
      const perfilNombreCompleto = document.getElementById('perfilNombreCompleto');
      const perfilEmail = document.getElementById('perfilEmail');
      const perfilFechaNacimiento = document.getElementById('perfilFechaNacimiento');
      const perfilUniversidad = document.getElementById('perfilUniversidad');
      const perfilSemestre = document.getElementById('perfilSemestre');
      const perfilHabilidades = document.getElementById('perfilHabilidades');

      if (perfilImagen) {
        perfilImagen.src = data.imagenPerfil || '../assets/perfil.png';
      } else {
        console.error('El elemento con ID "perfilImagen" no se encontró en el DOM.');
      }

      const nombreCompleto = `${data.nombre} ${data.apellido}`;

      if (perfilNombre) {
        perfilNombre.textContent = nombreCompleto;
      } else {
        console.error('El elemento con ID "perfilNombre" no se encontró en el DOM.');
      }

      if (perfilNombreCompleto) {
        perfilNombreCompleto.textContent = nombreCompleto;
      } else {
        console.error('El elemento con ID "perfilNombreCompleto" no se encontró en el DOM.');
      }

      if (perfilEmail) {
        perfilEmail.textContent = data.email;
      } else {
        console.error('El elemento con ID "perfilEmail" no se encontró en el DOM.');
      }

      if (perfilFechaNacimiento) {
        // Formatear la fecha de nacimiento
        const fecha = new Date(data.fechaNacimiento);
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
        perfilFechaNacimiento.textContent = fechaFormateada;
      } else {
        console.error('El elemento con ID "perfilFechaNacimiento" no se encontró en el DOM.');
      }

      if (perfilUniversidad) {
        perfilUniversidad.textContent = data.universidad;
      } else {
        console.error('El elemento con ID "perfilUniversidad" no se encontró en el DOM.');
      }

      if (perfilSemestre) {
        perfilSemestre.textContent = `${data.semestre}°`;
      } else {
        console.error('El elemento con ID "perfilSemestre" no se encontró en el DOM.');
      }

      // Cargar habilidades
      if (perfilHabilidades && data.habilidades) {
        perfilHabilidades.innerHTML = '';
        data.habilidades.forEach(habilidad => {
          const li = document.createElement('li');
          li.classList.add('list-inline-item');
          const span = document.createElement('span');
          span.classList.add('badge', 'bg-primary', 'me-1', 'mb-1');
          span.textContent = habilidad;
          li.appendChild(span);
          perfilHabilidades.appendChild(li);
        });
      } else {
        console.error('El elemento con ID "perfilHabilidades" no se encontró en el DOM. O no hay habilidades en el JSON.');
      }

    })
    .catch(error => {
      console.error('Error al cargar el perfil:', error);
      // Opcional: Mostrar un mensaje de error en el HTML
      const mainContent = document.querySelector('main.container');
      if (mainContent) {
        mainContent.innerHTML = '<p class="text-danger">Error al cargar el perfil. Por favor, inténtalo más tarde.</p>';
      }
    });
}

function editarPerfil() {
  alert('Función para editar el perfil en desarrollo.');
}
