const urlApi = 'https://aqueous-shore-96089.herokuapp.com'
const url = urlApi + '/api/projets/v1';

const proj = {
  "nom": "test",
  "createur": { id: 1},
  "urlsPiecesJointes": null,
  "typeProjet": "ENTREPRISE",
  "descriptionCourte": "coucou",
  "sommeDemandee": 30000,
  "sommeRecolte": 10000,
  "delaiRecolte": 30,
  "adresse": null
};

function getProjets(statut) {
  return fetch(`${url}?statut=${statut}`).then((response) => {
    return response.json();
  });
}

function createProjet(projet) {
  return fetch(url, {
    method: "POST", body: JSON.stringify(proj), headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return response.json();
  });
}

createProjet();

export {
  getProjets
}
