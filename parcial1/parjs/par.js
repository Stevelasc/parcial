fetch('json/productos.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('titulo_pagina').textContent = data.tiutlo_pagina;
    document.getElementById('datos_tienda').innerHTML = `
      <p><strong>Nombre:</strong> ${data.datos_tienda.nombre}</p>
      <p><strong>Dirección:</strong> ${data.datos_tienda.direccion}</p>
      <p><strong>Teléfono:</strong> ${data.datos_tienda.telefono}</p>
      <p><strong>Correo:</strong> ${data.datos_tienda.correo}</p>
      <p><strong>Horario de atención:</strong></p>
      <p>Lunes a Viernes: ${data.datos_tienda.horario_atencion.lunes_a_viernes}</p>
      <p>Sabados: ${data.datos_tienda.horario_atencion.sabados}</p>
      <p>Domingos: ${data.datos_tienda.horario_atencion.domingos}</p>
    `;

    const datos_tienda = data.datos_tienda;
    datos_tienda.innerHTML = datos_tienda;

  });