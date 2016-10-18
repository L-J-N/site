import React from 'react';
import ReactDOM from 'react-dom';
import ApercuCategorie from './index';

const data = {
  "id": 2,
  "nom": "Categorie 2",
  "listeProjet": [
    {
      "nom": "Projet 1",
      "imageUrl": "http://placehold.it/512x512?text=projet 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ellentesque risus mi tempus quis placerat ut, porta necgravida purus diam, et dictum felis venenatis efficitur.Aenean ac eleifend lacus, in mollis lectus. Donec sodales,arcu et sollicitudin porttitor, tortor urnatempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula etsem eget, facilisis sodales sem."
    },
    {
      "nom": "Projet 2",
      "imageUrl": "http://placehold.it/512x512?text=projet 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ellentesque risus mi tempus quis placerat ut, porta necgravida purus diam, et dictum felis venenatis efficitur.Aenean ac eleifend lacus, in mollis lectus. Donec sodales,arcu et sollicitudin porttitor, tortor urnatempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula etsem eget, facilisis sodales sem."
    },
    {
      "nom": "Projet 3",
      "imageUrl": "http://placehold.it/512x512?text=projet 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ellentesque risus mi tempus quis placerat ut, porta necgravida purus diam, et dictum felis venenatis efficitur.Aenean ac eleifend lacus, in mollis lectus. Donec sodales,arcu et sollicitudin porttitor, tortor urnatempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula etsem eget, facilisis sodales sem."
    }
  ]
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApercuCategorie {...data} />, div);
});
