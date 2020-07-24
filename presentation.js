const l = console.log
const service = require('./service.js')
const waitForUserInput = require('wait-for-user-input');

var continuer = true;

async function start() {
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
                l('>> Liste des clients');
                service.getClients(v1 => l(v1));
                break;

            case '2':
                const nom = await waitForUserInput('Quel est le NOM du client ?')
                const prenom = await waitForUserInput('Quel est le PRENOM du client ?')
                service.addClient(v1 => l(v1), nom, prenom);
                break;
            
            case '3':
                const searchNom = await waitForUserInput('Quel est le NOM du client à rechercher ?')
                service.rechercheParNom(v1 => l(v1), searchNom);
                break;

            case '4':
                const numChambre = await waitForUserInput('Quel est le numero de la chambre ?')
                service.verifieChambre(v1 => l(v1), numChambre);
                break;

            case '99':
                l('Au revoir !');
                continuer = false;
                break;
        }
    }
}


exports.start = start;