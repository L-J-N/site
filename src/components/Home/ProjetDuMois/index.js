import React, { Component } from 'react';
import ProgressBar from '../../ProgressBar';

import './index.css';

export default class ProjetDuMois extends Component {
  render() {
    return (
      <div className="box" >
        <h1 className="title is-1 has-text-centered" >Projet du mois</h1>
        <div className="container-projet-mois">
          <figure className="image-projet-mois">
            <img src={this.props.imageUrl} alt="projet du mois" />
          </figure>
          <div className="descrition-projet-mois">
            <span className="title is-3">{this.props.nom}</span>
            <div className="">
              {this.props.description}
            </div>
            <ProgressBar {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
