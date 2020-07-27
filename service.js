const request = require('request-promise-native');

class Service {

    constructor(){}

    getClients() {
        return request('https://robin-hotel-web-api.herokuapp.com/clients', { json: true })
            .then(c => c.map(v => `${v.nom} ${v.prenoms}`))
    }

    addClient(nom, prenom) {
        return request.post({
            headers: { 'content-type': 'application/json' },
            url: 'https://robin-hotel-web-api.herokuapp.com/clients',
            body: JSON.stringify({ nom: nom, prenoms: prenom })
        })
    }

    rechercheParNom(nom) {
        return request(`https://robin-hotel-web-api.herokuapp.com/clients/search/${nom}`, { json: true })
            .then(v => `${v.nom} ${v.prenoms}`)
    }

    verifieChambre(numero) {
        return request(`https://robin-hotel-web-api.herokuapp.com/reservations/chambre/${numero}`, { json: true })
    }

}
module.exports = { Service }