import React, { Component } from 'react';
import ApercuProjet from '../../components/ApercuProjet';

import { getCategorie } from '../../service/';

import './index.css';

export default class Categorie extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="categorie">
        <h1 className="title is-1" >
          {this.props.categorie ? this.props.categorie.nom : null}
        </h1>
        <div className="categorie-liste-projet">
          {
            this.props.categorie ? this.props.categorie.listeProjet.map((projet, i) => {
              return (
                <ApercuProjet key={i} {...projet} />
              );
            }) : null
          }
        </div>
      </div>
    );
  }
}
