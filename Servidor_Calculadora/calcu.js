const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// *** LA LÍNEA MÁGICA ***
// Esto le dice a Express que la carpeta 'public'
// contiene archivos estáticos (html, css, js)
// y que los sirva automáticamente.
app.use(express.static(path.join(__dirname, 'public')));

// Ponemos el servidor a escuchar
app.listen(PORT, () => {
  console.log(`Servidor de la Calculadora corriendo en http://localhost:${PORT}`);
});