import {urlApi} from './../properties';
const url = urlApi + '/api/publications/v1';

function getPublication(idProjet) {
  return fetch(`${url}?projet=${idProjet}`).then((response) => {
    return response.json();
  });
}


export {
  getPublication
}
