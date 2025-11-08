const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; // Usaremos un solo puerto para todo

// *** LA LÍNEA MÁGICA ***
// Esto "publica" la carpeta 'public' y todo su contenido
app.use(express.static(path.join(__dirname, 'public')));

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor principal escuchando en http://localhost:${PORT}`);
});