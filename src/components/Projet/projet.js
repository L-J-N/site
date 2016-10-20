import React, { Component } from 'react';

import './index.css';

export default class Projet extends Component {
  render() {
    console.log(this.props);
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
        </div>
      </div>
    );
  }
}
