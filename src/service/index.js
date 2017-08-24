const urlApi = 'https://aqueous-shore-96089.herokuapp.com';
const url = urlApi + '/api/projets/v1';

function getProjets(statut) {
  return fetch(`${url}?statut=${statut}`).then((response) => {
    return response.json();
  });
}

function getAllProjets() {
  return fetch(`${url}`).then((response) => {
    return response.json();
  });
}

function createProjet(projet) {
  return fetch(url, {
    method: "POST", body: JSON.stringify(projet), headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return response.json();
  });
}

function updateStatut(idProjet, statut) {
  return fetch(`${url}?idProjet=${idProjet}&statut=${statut}`, {
    method: "PATCH", headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
    return response.json();
  });
}

export {
  getProjets,
  getAllProjets,
  createProjet,
  updateStatut
}
