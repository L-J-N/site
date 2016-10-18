import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';

import './index.css';

export default class ApercuProjet extends Component {
  render() {
    return (
      <div className="card apercu-projet" >
        <div className="card-image">
          <figure className="image is-3by2">
            <img src={this.props.imageUrl} alt={this.props.nom} />
          </figure>
        </div>
        <header className="card-header">
          <p className="card-header-title">{this.props.nom}</p>
        </header>
        <div className="card-content">
          <div className="content">
            {this.props.description}
          </div>
          <ProgressBar {...this.props} />
        </div>
      </div>
    );
  }
}
