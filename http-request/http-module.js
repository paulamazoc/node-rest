const https = require('https');

https.get('https://pokeapi.co/api/v2/pokemon/12', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).name);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});