import React, { Component } from 'react';

import ApercuProjet from '../../components/ApercuProjet';

import './index.css';

export default class ProjetPopulaire extends Component {
  render() {
    return (
      <div>
        <h1 className="title is-1 has-text-centered" >Projet populaire</h1>
        <div className="container-projet-populaire" >
          {
            this.props.listeProjet && this.props.listeProjet.map((projet, i) => {
              return (
                  <ApercuProjet key={i} {...projet}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}
