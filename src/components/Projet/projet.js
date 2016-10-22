import React, { Component } from 'react';
import calculPercent from '../../utils/calculPercent';
import calculRemainingDay from '../../utils/calculRemainingDay';

import './index.css';

const Stat = (props) => {
  const percent = calculPercent(props.montant, props.total);
  const nbJours = calculRemainingDay(props.dateFin);
  return (
    <div className="projet-stat">
      <div>
        <span className="icon is-large">
          <i className="fa fa-money"></i>
        </span>
        {percent + ' '}%
      </div>
      <div>
        {nbJours} {nbJours > 1 ? "jours restants" : "jour restant"}
      </div>
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      <div className="projet-user-info">
        <div>
          <p>Jean Bon</p>
          <p>2 projets créés</p>
          <p>www.jean-bon.com</p>
        </div>
        <a className="icon is-large" href="">
          <i className="fa fa-male"></i>
        </a>
      </div>
      <div>
        <a className="icon" href="">
          <i className="fa fa-user"></i>
        </a>
        <a className="icon" href="">
          <i className="fa fa-plus"></i>
        </a>
        <a className="icon" href="">
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

const Social = () => {
  return (
    <div>
      <a className="icon" href="">
        <i className="fa fa-twitter"></i>
      </a>
      <a className="icon" href="">
        <i className="fa fa-share-alt"></i>
      </a>
      <a className="icon" href="">
        <i className="fa fa-facebook-official"></i>
      </a>
    </div>
  );
};

export default class Projet extends Component {
  render() {
    return (
      <div>
        <h1 className="title is-1 has-text-centered" >{this.props.nom}</h1>
        <div className="projet-content">
          <div className="projet-left">
          <figure>
            <img src={this.props.imageUrl} alt={this.props.nom} />
          </figure>
          <h1 className="title is-4 " >{this.props.descriptionCourte}</h1>
          <Social />
        </div>
        <div className="projet-right">
          <Stat {...this.props} />
          <a className="button is-primary is-large">Faire un don</a>
          <User />
        </div>
        </div>
      </div>
    );
  }
}
