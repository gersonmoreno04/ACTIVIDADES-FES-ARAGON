/**
 * MORENO ANAYA GERSON
 * NODE HTML
 */
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
//Se define la ruta
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Servidor Express (HTML) corriendo en http://localhost:${PORT}`);
});