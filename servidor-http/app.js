/**
 * MORENO ANAYA GERSON
 * NODE HTTP
 */
const http = require('http');// Usamos el módulo http que viene nativo en Node
const PORT = 3000;
// Se crea el servidor 
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Gerson Moreno Anaya primer node');
});
server.listen(PORT, () => {
  console.log(`Servidor HTTP nativo corriendo en http://localhost:${PORT}`);
});