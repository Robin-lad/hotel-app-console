var request = require('request');

request('https://jsonplaceholder.typicode.com/posts', { json: true }, function (err, res, body) {
    if (err) { return console.log('Erreur', err); }
    
    console.log('Ok', body);
});