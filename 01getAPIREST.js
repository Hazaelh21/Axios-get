document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "http://localhost:9000/api/species";  // URL de la API
  const contenedor = document.getElementById("contenedor");

  // Hacer la petición con Axios
  axios.get(API_URL)
      .then(response => {
          mostrarTarjetas(response.data);  // Mostrar las tarjetas si la petición fue exitosa
      })
      .catch(error => console.error("Error al obtener datos:", error));

  // Mostrar tarjetas de especies
  function mostrarTarjetas(datos) {
      contenedor.innerHTML = "";  // Limpiar el contenedor

      datos.forEach(item => {
          const tarjeta = document.createElement("div");
          tarjeta.classList.add("tarjeta");

          // URL de la imagen
          const imageUrl = `http://localhost:9000/${item.picture}`;

          tarjeta.innerHTML = `
              <img src="${imageUrl}" alt="${item.name}">
              <h3>${item.name}</h3>
          `;

          // Mostrar detalles al hacer clic en la tarjeta
          tarjeta.addEventListener("click", () => mostrarDetalle(item, datos));
          contenedor.appendChild(tarjeta);
      });
  }

  // Mostrar el detalle de una especie
  function mostrarDetalle(item, datos) {
      const imageUrl = `http://localhost:9000/${item.picture}`;
      contenedor.innerHTML = `
          <div class="detalle">
              <img src="${imageUrl}" alt="${item.name}">
              <div class="detalle-info">
                  <h2>${item.name}</h2>
                  <p><strong>Estado:</strong> ${item.status}</p>
                  <p><strong>Descripción:</strong> ${item.description || "No hay descripción disponible."}</p>
                  <p><strong>Especie:</strong> ${item.species}</p>
                  <p><strong>Genero:</strong> ${item.gender}</p>
                  <button id="volver">Volver</button>
              </div>
          </div>
      `;

      // Volver a la galería de tarjetas
      document.getElementById("volver").addEventListener("click", () => mostrarTarjetas(datos));
  }
});