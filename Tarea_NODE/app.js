//MORENO ANAYA GERSON APP RAIZ DE NODE
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; //Usamos el puerto 3000 
app.use(express.static(path.join(__dirname, 'public'))); //Usamos la carpeta public
//Inicializa el servidor
app.listen(PORT, () => {
    console.log(`Servidor principal escuchando en http://localhost:${PORT}`);
});