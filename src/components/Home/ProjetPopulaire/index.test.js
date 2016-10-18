import React from 'react';
import ReactDOM from 'react-dom';
import ProjetPopulaire from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const listeProjet = [
    {
      nom: "Projet 1",
      imageUrl: "http://placehold.it/512x512?text=projet 1",
      description: 'lorem'
    },
    {
      nom: "Projet 2",
      imageUrl: "http://placehold.it/512x512?text=projet 2",
      description: 'lorem'
    },
    {
      nom: "Projet 3",
      imageUrl: "http://placehold.it/512x512?text=projet 3",
      description: 'lorem'
    }
  ];

  ReactDOM.render(<ProjetPopulaire listeProjet={listeProjet} />, div);
});
