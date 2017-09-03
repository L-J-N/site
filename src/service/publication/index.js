import {urlApi, publicationTest} from '../constants';
const url = urlApi + '/api/publications/v1';

function getPublication(idProjet) {
  return fetch(`${url}?projet=${idProjet}`).then((response) => {
    return response.json();
  });
}

function updatePublication(publication) {
  return fetch(url, {
    method: "PUT", body: JSON.stringify(publication), headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    window.location.href = window.location.origin + "/projet/" + publication.idProjet;
    return response.json();
  });
}


export {
  getPublication,
  updatePublication
}
