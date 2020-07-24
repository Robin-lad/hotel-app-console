const request = require('request');

function getClients(callback) {
    request('https://robin-hotel-web-api.herokuapp.com/clients/all', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }
        callback(body)

    });
}

function addClient(callback, nom , prenom){
    request.post({
        headers: {'content-type' : 'application/json'},
        url:     'https://robin-hotel-web-api.herokuapp.com/clients',
        body:    JSON.stringify({ nom: nom, prenoms:prenom })
      }, function(error, response, body){
        callback(body)
      });
}

function rechercheParNom(callback, nom){
    request('https://robin-hotel-web-api.herokuapp.com/clients/search/' + nom, { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }
        callback(body)
    });
}

function verifieChambre(callback, numero){
    request('https://robin-hotel-web-api.herokuapp.com/reservations/chambre/' + numero, { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }
        callback(body)
    });
}

exports.verifieChambre = verifieChambre;
exports.rechercheParNom = rechercheParNom;
exports.addClient = addClient;
exports.getClients = getClients;