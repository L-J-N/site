import React from 'react';
import ReactDOM from 'react-dom';
import ApercuProjet from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const projet = {
    nom: "Le nom",
    imageUrl: "http://placehold.it/640x360?text=projet du mois",
    description: 'lorem'
  };

  ReactDOM.render(<ApercuProjet {...projet}/>, div);
});
