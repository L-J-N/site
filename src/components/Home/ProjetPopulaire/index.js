import React, { Component } from 'react';

import './index.css';

export default class ProjetPopulaire extends Component {
  render() {
    return (
      <div>
        <h1 className="title is-1 has-text-centered" >Projet populaire</h1>
        <div className="container-projet-populaire" >
          {
            this.props.listeProjet.map((projet, i) => {
              return (
                <div key={i} className="card project-populaire-card" >
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img src={projet.imageUrl} alt={projet.nom} />
                    </figure>
                  </div>
                  <header className="card-header">
                     <p className="card-header-title">{projet.nom}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      {projet.description}
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
