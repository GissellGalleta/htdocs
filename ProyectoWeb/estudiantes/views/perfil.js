// /estudiantes/js/perfil.js

// Datos de ejemplo del perfil (reemplazar con datos reales de la base de datos)
const perfil = {
    nombre: "Juan Pérez",
    fechaNacimiento: "15/08/1995",
    carrera: "Ingeniería en Sistemas",
    semestre: "7°",
    universidad: "IT Veracruz",
    habilidades: ["HTML", "CSS", "JavaScript", "Inglés - Avanzado"],
    imagen: "../assets/perfil.jpg"
  };
  
  // Función para cargar la información del perfil
  function cargarPerfil() {
    // Actualizar la información en el HTML
    document.getElementById('perfilImagen').src = perfil.imagen || 'https://via.placeholder.com/150';
    document.getElementById('perfilNombre').textContent = perfil.nombre;
    document.getElementById('perfilNombreCompleto').textContent = perfil.nombre;
    document.getElementById('perfilFechaNacimiento').textContent = perfil.fechaNacimiento;
    document.getElementById('perfilCarrera').textContent = perfil.carrera;
    document.getElementById('perfilSemestre').textContent = perfil.semestre;
    document.getElementById('perfilUniversidad').textContent = perfil.universidad;
  
    // Cargar habilidades
    const habilidadesList = document.getElementById('perfilHabilidades');
    habilidadesList.innerHTML = ''; // Limpiar contenido previo
    perfil.habilidades.forEach(habilidad => {
      const li = document.createElement('li');
      li.textContent = habilidad;
      habilidadesList.appendChild(li);
    });
  }
  
  // Función para editar el perfil
  function editarPerfil() {
    alert('Función para editar el perfil en desarrollo.');
  }
  