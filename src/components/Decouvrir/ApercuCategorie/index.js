import React, { Component } from 'react';
import ApercuProjet from '../../ApercuProjet';
import { Link } from 'react-router';

import './index.css';

export default class ApercuCategorie extends Component {
  render() {

    return (
      <div className="apercu-categorie">
        <div className="apercu-categorie-header">
          <h1 className="title is-1" >
            {this.props.nom}
          </h1>
          <Link className="button is-info" to={`/categorie/${this.props.id}`} >
            Tout voir
          </Link>
        </div>
        <div className="apercu-categorie-liste">
          <a className="button is-large button-precedent"  >
            <i className="fa fa-arrow-left"></i>
          </a>
          {
            this.props.listeProjet.map((projet, i) => {
              return (
                <ApercuProjet key={i} {...projet} />
              );
            })
          }
          <a className="button is-large button-precedent"  >
            <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    );
  }
}
