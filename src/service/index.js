function fetchData() {
  return fetch(process.env.PUBLIC_URL + '/data/categorie.json').then((response) => {
    return response.json();
  });
}

export function getCategories() {
  return fetchData().then(data => {
    return data.map(cat => {
      cat.listeProjet = cat.listeProjet.slice(0, 3);
      return cat;
    });
  });
}

export function getCategorie(id) {
  return fetchData().then(data => {
    return data.filter(data => {
      return data.id === parseInt(id, 10);
    })[0];
  });
}

export function getProjet(id) {
  return fetchData().then(data => {
    return data.reduce((flat, toflatten) => {
      return flat.concat(toflatten.listeProjet);
    }, [])
      .filter(projet => {
        return projet.id === id;
      })[0];
  });
}
