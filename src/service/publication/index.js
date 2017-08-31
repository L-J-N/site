import {urlApi, publicationTest} from '../constants';
const url = urlApi + '/api/publications/v1';

function getPublication(idProjet) {
  return fetch(`${url}?projet=${idProjet}`).then((response) => {
    return response.json();
  });
}

function createPublicationTest(idProjet) {
  publicationTest.idProjet = idProjet;
  createPublication(publicationTest);
}

function createPublication(publication) {
  return fetch(url, {
    method: "POST", body: JSON.stringify(publication), headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return response.json();
  });
}


export {
  getPublication,
  createPublication,
  createPublicationTest
}
