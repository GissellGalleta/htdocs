// /Proyectos/js/mis-proyectos.js
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
  
  function cargarProyectos() {
    // Realizar una solicitud para obtener el JSON local
    fetch('../data/proyectos-terminados.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar los proyectos: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        mostrarProyectos(data);
      })
      .catch(error => {
        console.error('Error:', error);
        // Mostrar un mensaje de error en la página
        const listaProyectos = document.getElementById('listaProyectos');
        listaProyectos.innerHTML = '<p class="text-danger">Error al cargar los proyectos.</p>';
      });
  }
  
  function mostrarProyectos(proyectos) {
    const listaProyectos = document.getElementById('listaProyectos');
    listaProyectos.innerHTML = ''; // Limpiar contenido previo
  
    proyectos.forEach(proyecto => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';
  
      const card = document.createElement('div');
      card.className = 'card h-100';
  
      // Imagen del proyecto
      const img = document.createElement('img');
      img.src = proyecto.imagen;
      img.className = 'card-img-top';
      img.alt = proyecto.titulo;
  
      // Cuerpo de la tarjeta
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body d-flex flex-column';
  
      // Título del proyecto
      const cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.textContent = proyecto.titulo;
  
      // Categoría
      const categoria = document.createElement('p');
      categoria.className = 'card-text';
      categoria.innerHTML = `<strong>Categoría:</strong> ${proyecto.categoria}`;

      // estado
      const estado = document.createElement('p');
      estado.className = 'card-text';
      estado.innerHTML = `<strong>Estado:</strong> ${proyecto.estado}`;
  
      // Nombre de la empresa
      const empresa = document.createElement('p');
      empresa.className = 'card-text';
      empresa.innerHTML = `<strong>Empresa:</strong> ${proyecto.empresa}`;
  
      // Agregar elementos al cardBody
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(categoria);
      cardBody.appendChild(estado);
      cardBody.appendChild(empresa);
  
      // Agregar imagen y cardBody a la tarjeta
      card.appendChild(img);
      card.appendChild(cardBody);
  
      // Agregar tarjeta a la columna
      col.appendChild(card);
  
      // Agregar columna a la lista de proyectos
      listaProyectos.appendChild(col);
    });
  }
  