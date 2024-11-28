// /estudiantes/js/perfil.js

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
      document.getElementById('perfilImagen').src = data.imagen || '../assets/perfil.jpg';
      document.getElementById('perfilNombre').textContent = data.nombre;
      document.getElementById('perfilEmail').textContent = data.email;
      document.getElementById('perfilNombreCompleto').textContent = data.nombreCompleto;
      
      // Formatear la fecha de nacimiento
      const fecha = new Date(data.fechaNacimiento);
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
      const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
      document.getElementById('perfilFechaNacimiento').textContent = fechaFormateada;
      
      document.getElementById('perfilUniversidad').textContent = data.universidad;
      document.getElementById('perfilSemestre').textContent = data.semestre;

      // Cargar habilidades
      const habilidadesList = document.getElementById('perfilHabilidades');
      habilidadesList.innerHTML = ''; // Limpiar contenido previo
      data.habilidades.forEach(habilidad => {
        const li = document.createElement('li');
        li.className = 'list-inline-item';
        li.innerHTML = `<span class="badge bg-primary">${habilidad}</span>`;
        habilidadesList.appendChild(li);
      });
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
