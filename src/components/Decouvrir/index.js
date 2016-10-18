import React, { Component } from 'react';
import ApercuCategorie from './ApercuCategorie';

import './index.css';

export default class Decouvrir extends Component {
  render() {

    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ellentesque risus mi
                  tempus quis placerat ut, porta nec
                  nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
                  gravida purus diam, et dictum felis venenatis efficitur.
                  Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
                  arcu et sollicitudin porttitor, tortor urna tempor ligula,
                  id porttitor mi magna a neque. Donec dui urna, vehicula et
                  sem eget, facilisis sodales sem.`;

    const listeProjet = [
      {
        nom: "Projet 1",
        imageUrl: "http://placehold.it/512x512?text=projet 1",
        description: lorem
      },
      {
        nom: "Projet 2",
        imageUrl: "http://placehold.it/512x512?text=projet 2",
        description: lorem
      },
      {
        nom: "Projet 3",
        imageUrl: "http://placehold.it/512x512?text=projet 3",
        description: lorem
      }
    ];

    const categories = [
      {
        nom: "Categorie 1",
        listeProjet: listeProjet
      },

      {
        nom: "Categorie 2",
        listeProjet: listeProjet
      },

      {
        nom: "Categorie 3",
        listeProjet: listeProjet
      }
    ];

    return (
      <div className="categorie-container" >
        {categories.map((cat, i) => {
          return <ApercuCategorie key={i} {...cat} />;
        }
        )}
      </div>
    );
  }
}
