// /empresas/js/mis-proyectos.js

function cargarProyectos() {
  // Realizar una solicitud para obtener el JSON local
  fetch('../data/proyectos.json')
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

    // Nombre de la empresa
    const empresa = document.createElement('p');
    empresa.className = 'card-text';
    empresa.innerHTML = `<strong>Empresa:</strong> ${proyecto.empresa}`;

    // Botón "Ver más"
    const btnVerMas = document.createElement('a');
    btnVerMas.href = `detalle-proyecto.html?id=${proyecto.id}`; // Redirige con el ID del proyecto
    btnVerMas.className = 'btn btn-primary mt-auto align-self-start';
    btnVerMas.textContent = 'Ver más';

    // Agregar elementos al cardBody
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(categoria);
    cardBody.appendChild(empresa);
    cardBody.appendChild(btnVerMas);

    // Agregar imagen y cardBody a la tarjeta
    card.appendChild(img);
    card.appendChild(cardBody);

    // Agregar tarjeta a la columna
    col.appendChild(card);

    // Agregar columna a la lista de proyectos
    listaProyectos.appendChild(col);
  });
}
