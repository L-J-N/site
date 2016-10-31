import React, { Component } from 'react';
import ApercuProjet from '../../ApercuProjet';

import { getCategorie } from '../../../service/';

import './index.css';

export default class Categorie extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const { categorieId } = this.props.params;
    getCategorie(categorieId).then((data) => {
      this.setState({
        categorie: data
      });
    });
  }
  render() {
    return (
      <div className="categorie">
        <h1 className="title is-1" >
          {this.state.categorie ? this.state.categorie.nom : null}
        </h1>
        <div className="categorie-liste-projet">
          {
            this.state.categorie ? this.state.categorie.listeProjet.map((projet, i) => {
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
