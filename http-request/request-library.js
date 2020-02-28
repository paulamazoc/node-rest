// 03. Hacer una petición HTTP a través de la librería request

const request = require('request');

request('https://pokeapi.co/api/v2/pokemon/12', { json: true }, (err, res, body) => {
  if (err) { return console.log(err) }
  console.log(body.name);
});
