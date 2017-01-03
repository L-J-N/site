import React, { Component } from 'react';
import Social from './Social';
import User from './User';
import Stat from './Stat';
import Description from './Description';
import Evolution from './Evolution';
import Commentaire from './Commentaire';

import './index.css';

export default class Projet extends Component {
  constructor() {
    super();
    this.state = {
      currentTab : 1
    };
    this.clickTab = this.clickTab.bind(this);
  }
  chooseTab(i) {
    switch (i) {
      case 2:
        return <Evolution />;
      case 3:
        return <Commentaire />;
      case 1:
      default:
        return <Description />;
    }
  }
  clickTab(i) {
    this.setState({
      currentTab : i
    });
  }
  render() {
    const currentTab = this.chooseTab(this.state.currentTab);
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
        <div className="content">
          <div className="tabs is-boxed">
            <ul>
              <li className={this.state.currentTab === 1 ? "is-active" : "" }>
                  <a  onClick={() => this.clickTab(1)}>Description</a>
              </li>
                <li className={this.state.currentTab === 2 ? "is-active" : "" }>
                  <a  onClick={() => this.clickTab(2)}>Evolution</a>
              </li>
                <li className={this.state.currentTab === 3 ? "is-active" : "" }>
                  <a  onClick={() => this.clickTab(3)}>Commentaire</a>
              </li>
            </ul>
          </div>
          {currentTab}
        </div>
      </div>
    );
  }
}
