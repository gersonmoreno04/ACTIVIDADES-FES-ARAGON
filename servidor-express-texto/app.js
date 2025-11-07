/*
MORENO ANAYA GERSON 
NODE TEXTP 
*/
const express = require('express');// Importamos express (instalado con npm)
const app = express();
const PORT = 3000;
// Se define la ruta principal
app.get('/', (req, res) => {

  res.send('Gerson Moreno Anaya Node con Texto');
});

// La app se pone a escuchar en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor Express (texto) corriendo en http://localhost:${PORT}`);
});