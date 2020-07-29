import request from 'request-promise-native'
import { Client } from './domain'

export class Service {

    constructor() { }

    getClients() {
        return request('https://robin-hotel-web-api.herokuapp.com/clients', { json: true })
            .then(c => c.map((v:Client) =>  `${v.nom} ${v.prenoms}` ))
    }

    addClient(nom:string, prenom:string) {
        return request.post({
            headers: { 'content-type': 'application/json' },
            url: 'https://robin-hotel-web-api.herokuapp.com/clients',
            body: JSON.stringify({ nom: nom, prenoms: prenom })
        })
    }

    rechercheParNom(nom: string) {
        return request(`https://robin-hotel-web-api.herokuapp.com/clients/search/${nom}`, { json: true })
            .then((v:Client) => `${v.nom} ${v.prenoms}`)
    }

    verifieChambre(numero: any) {
        return request(`https://robin-hotel-web-api.herokuapp.com/reservations/chambre/${numero}`, { json: true })
    }
}