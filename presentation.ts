const l = console.log
import { Service } from './service'
import { Client } from './domain';
const waitForUserInput = require('wait-for-user-input');

let continuer = true;

export async function start() {

    const serv = new Service()

    l('** Administration Hotel **')

    while (continuer) {

        l('1. Lister les clients.')
        l('2. Ajouter un client.')
        l('3. Rechercher un client par nom.')
        l('4. Vérifier la disponibilité d\'une chambre.')
        l('99. Sortir.')

        const userInput = await waitForUserInput('')

        switch (userInput) {
            case '1':
                l('>> Liste des clients')
                const listeClient$ = serv.getClients()
                listeClient$.then((c:Client) => l(c)).catch(err => l(err))
                break;

            case '2':
                const nom = await waitForUserInput('Quel est le NOM du client ?')
                const prenom = await waitForUserInput('Quel est le PRENOM du client ?')
                const ajoutClient$ = serv.addClient(nom, prenom)
                ajoutClient$.then(c => l(c)).catch(err => l(err))
                break;

            case '3':
                const searchNom = await waitForUserInput('Quel est le NOM du client à rechercher ?')
                const rechercheParNom$ = serv.rechercheParNom(searchNom)
                rechercheParNom$.then((c:string) => l(c)).catch(err => l(err))
                break;

            case '4':
                const numChambre = await waitForUserInput('Quel est le numero de la chambre ?')
                const verifieChambre$ = serv.verifieChambre(numChambre)
                verifieChambre$.then((c:string) => l(c)).catch(err => l(err))
                break;

            case '99':
                l('Au revoir !');
                continuer = false;
                break;
        }
    }
}