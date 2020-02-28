const https = require('https');

https.get('https://pokeapi.co/api/v2/pokemon/1', (resp) => {
  let data = '';

  // Se van recibiendo los datos.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // Cuando termino de recibir la respuesta, imprimo el resultado.
  resp.on('end', () => {
    console.log(JSON.parse(data).name);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});