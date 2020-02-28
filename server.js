// 01. Creamos un servidor que escuche peticiones HTTP

// 1. Cargamos el módulo HTTP
const http = require('http');

// 2. Creamos el servidor y lo guardamos como un objeto
const server = http.createServer( (req,res) => {
    
    // Creamos rutas para manejar las diferentes peticiones
    if (req.url === '/') {
        // Le enviamos algo al cliente
        res.write('Welcome to Node.js Community!');
        res.end();
    }

    if(req.url === '/api/numbers'){
        res.write(JSON.stringify([1, 2, 3])); // convertirá el array en un string utilizando la sintaxis JSON
        res.end();
     }
});

// server.on('connection', (socket) => {
//     console.log('New connection');
// });

server.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000/`);
}); 
