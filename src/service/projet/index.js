import {urlApi} from './../properties';
const url = urlApi + '/api/projets/v1';

function getProjet(id) {
  return fetch(`${url}/${id}`).then((response) => {
    return response.json();
  });
}

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

function getVignettes(statut) {
  return fetch(`${url}/vignette?statut=${statut}`).then((response) => {
    return response.json();
  });
}

function createProjetTest() {

  const projet = {
    "nom": "Projet test "+new Date().getTime(),
    "createur": { id: 1},
    "typeProjet": "ENTREPRISE",
    "descriptionCourte": "Une description lambda pour tester.",
    "sommeDemandee": 30000,
    "sommeRecolte": 0,
    "delaiRecolte": 30,
    "adresse": null
  };

  createProjet(projet);
}

function createProjet(projet) {
  return fetch(url, {
    method: "POST", body: JSON.stringify(projet), headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    window.location.reload();
    return response.json();
  });
}



function updateStatut(idProjet, statut) {
  return fetch(`${url}?idProjet=${idProjet}&statut=${statut}`, {
    method: "PATCH", headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
    window.location.reload();
    return response.json();
  });
}

export {
  getProjet,
  getProjets,
  getAllProjets,
  getVignettes,
  createProjet,
  createProjetTest,
  updateStatut
}
